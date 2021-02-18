import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import CreateUserPage from './pages/CreateUserPage'
import LoginPage from './pages/ListUserPage'
import Sucess from './pages/Sucess'

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/user" component={LoginPage} />
      <Route exact path="/user/create" component={CreateUserPage} />
      <Route exact path="/sucess" component={Sucess} />
    </BrowserRouter>
  )
}

export default Routes