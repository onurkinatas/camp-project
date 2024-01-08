import React, {useState, useEffect} from 'react'
import CartSummary from './CartSummary'
import { MenuMenu, MenuItem, Menu, Container, Button, } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { useNavigate } from 'react-router-dom'

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  const navigate = useNavigate() 

  function handleSignOut() {
    setIsAuthenticated(false)
    navigate("/")
  }

  function handleSignIn() {
    setIsAuthenticated(true)
  }

  return (
    <div>
      <Menu inverted fixed = "top">
        <Container>
        <MenuItem onClick={() => navigate("/")}  name="home"/>  
        <MenuItem name="messages"/>

        <MenuMenu position="right">
          <CartSummary/>
          {isAuthenticated?<SignedIn signOut = {handleSignOut} bisey = "1" />:<SignedOut signIn = {handleSignIn}/>}
        </MenuMenu>
        </Container>        
      </Menu>        
    </div>
  )
}
