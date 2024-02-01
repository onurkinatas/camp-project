import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Button, FormField, Label } from "semantic-ui-react";
import * as Yup from "yup";
import KodlamaTextInput from "../utilities/customFormControls/OnurTextInput";

export default function ProductAdd() {
  const initialValues = { title: "", price: 10 };

  const schema = Yup.object({
    title: Yup.string().required("Ürün adı zorunludur."),
    price: Yup.number().required("Ürün fiyatı zorunludur."),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="ui form">
        <KodlamaTextInput name="title" placeholder="Ürün Adı"/>
        <KodlamaTextInput name="price" placeholder="Ürün Fiyatı"/>
        <Button color="green" type="submit">Ekle</Button>
      </Form>
    </Formik>
  );
}
