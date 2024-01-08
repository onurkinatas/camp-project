import { useState, useEffect } from 'react'
import {TableRow, TableHeaderCell, TableHeader, TableFooter, TableCell, TableBody, MenuItem, Icon, Label, Menu, Table,} from 'semantic-ui-react'
import ProductService from '../services/productService'
import { Link } from 'react-router-dom'


export default function ProductList() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    let productService = new ProductService()
    productService.getProducts().then(result => setProducts(result.data.products))
  }, [])
  
  return (
    <div>
      <Table celled>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Ürün Adı</TableHeaderCell>
            <TableHeaderCell>Birim Fiyatı</TableHeaderCell>
            <TableHeaderCell>Stok Adedi</TableHeaderCell>
            <TableHeaderCell>Açıklama</TableHeaderCell>
            <TableHeaderCell>Kategori</TableHeaderCell>
          </TableRow>
        </TableHeader>
    <TableBody>
      { products.map(product => (
          <TableRow key = {product.id}>
          <TableCell><Link to = {`/products/${product.id}`}>{product.title}</Link></TableCell>
          <TableCell>{product.price}</TableCell>
          <TableCell>{product.stock}</TableCell>
          <TableCell>{product.description}</TableCell>
          <TableCell>{product.category}</TableCell>
        </TableRow>
        ))}   
    </TableBody>
    <TableFooter>
      <TableRow>
        <TableHeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <MenuItem as='a' icon>
              <Icon name='chevron left' />
            </MenuItem>
            <MenuItem as='a'>1</MenuItem>
            <MenuItem as='a'>2</MenuItem>
            <MenuItem as='a'>3</MenuItem>
            <MenuItem as='a'>4</MenuItem>
            <MenuItem as='a' icon>
              <Icon name='chevron right' />
            </MenuItem>
          </Menu>
        </TableHeaderCell>
      </TableRow>
    </TableFooter>
  </Table>
    </div>
  )
}
