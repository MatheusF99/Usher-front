import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import CreateUserPage from './pages/CreateUserPage'
import LoginPage from './pages/ListUserPage'

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/user" component={LoginPage} />
      <Route exact path="/user/create" component={CreateUserPage} />
    </BrowserRouter>
  )
}

export default Routes