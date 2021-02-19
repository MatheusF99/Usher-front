import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import CreateUserPage from './pages/CreateUserPage'
import HomePage from './pages/ListUserPage'
import LoginPage from './pages/LoginPage/LoginPage'
import Sucess from './pages/Sucess'

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/user" component={HomePage} />
      <Route exact path="/user/create" component={CreateUserPage} />
      <Route exact path="/sucess" component={Sucess} />
      <Route exact path="/login" component={LoginPage} />
    </BrowserRouter>
  )
}

export default Routes