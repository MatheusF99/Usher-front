import React, {FormEvent, useState} from 'react';
import { Link, useHistory } from 'react-router-dom'
import api from '../../services/api';

import './login.css'
// import { Container } from './styles';

function LoginPage(){

  const history = useHistory()

  const [emailUser, setEmailUser] = useState('')
  const [passwordUser, setPasswordUser] = useState('')
  const [loginStatus, setLoginStatus] = useState(false)
  


  function handleLogin(event: FormEvent){
    event.preventDefault()

    api.post('/user/login', {

      email: emailUser,
      password: passwordUser

    }).then( (response) => {

      if(!response.data.auth){
        
        setLoginStatus(false)
        console.log(response.data);
        

      } else {

        localStorage.setItem("token","Bearer " + response.data.token)
        setLoginStatus(true)

      }
    })
  }

  const userAutheticate = () => {
    history.push('/user')
  }

  return (
    <div className="login-page">
      <form onSubmit={handleLogin} action="">
        
        <h1>Log In</h1>

        <div className="input-container">
          <input 
            required
            type="email"
            value={emailUser} 
            onChange={event => setEmailUser(event.target.value)}
          />
          <label htmlFor="">Email</label>
        </div>

        <div className="input-container">
          <input  
            required
            type="password"
            value={passwordUser}
            onChange={event => setPasswordUser(event.target.value)}
          />
          <label htmlFor="">Password</label>
        </div>

        <div className="check-input">
          <input type="checkbox" name="" id=""/>
          <label htmlFor=""> Keep you login </label>
        </div>

        <button type="submit" className="button-form">
          Login
        </button>

        <div className="button-container">
          {loginStatus && (
            <button type='button' onClick={userAutheticate}> Checar autenticação </button> 
          )}
        </div>
      </form>

      <div className="create-account">
        Don't have account? <Link to="/user/create">Sign Up</Link>
      </div>
    </div>
  )
}

export default LoginPage;