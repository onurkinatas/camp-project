import React from 'react'
import { Dropdown, DropdownItem, DropdownMenu, MenuItem, Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
  return (
    <div>
        <MenuItem>
        <Image avatar spaced = "right" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKMlP6lfuoCX577cJyB1kvl0Hiy2OCLQXQJg&usqp=CAU"/>
        <Dropdown pointing = "top left" text="Onur">
            <DropdownMenu>
                <DropdownItem text= "Bilgilerim" icon ="info"/> 
                <DropdownItem onClick={signOut} text= "Çıkış Yap" icon ="sign-out"/>                           
            </DropdownMenu>
        </Dropdown>
        </MenuItem>
    </div>
  )
}
