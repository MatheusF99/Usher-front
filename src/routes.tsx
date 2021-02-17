import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/user" component={LoginPage} />
    </BrowserRouter>
  )
}

export default Routes