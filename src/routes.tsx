import React, { useContext } from 'react'
import { BrowserRouter, Redirect, Route } from 'react-router-dom'
import { AuthContext } from './Context/authContext'
import CreateUserPage from './pages/CreateUserPage'
import HomePage from './pages/ListUserPage'
import LoginPage from './pages/LoginPage/LoginPage'
import Sucess from './pages/Sucess'

function CustomRoute({...rest}){

  const {authenticated} = useContext(AuthContext)

  if(!authenticated){
    return <Redirect to="/login" />
  }

  return <Route {...rest}/>
}

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/user/create" component={CreateUserPage} />
      <Route exact path="/sucess" component={Sucess} />
      <Route exact path="/login" component={LoginPage} />
      <CustomRoute isPrivate exact path="/user" component={HomePage} />
    </BrowserRouter>
  )
}

export default Routes