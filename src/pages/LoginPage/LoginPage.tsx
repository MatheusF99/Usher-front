import React, {FormEvent, useState, useContext} from 'react';
import { Link, useHistory } from 'react-router-dom'
import { AuthContext } from '../../Context/authContext';
import api from '../../services/api';

import './login.css'
// import { Container } from './styles';

function LoginPage(){

  const {handleAuth} = useContext(AuthContext)
  const history = useHistory()
  const [emailUser, setEmailUser] = useState('')
  const [passwordUser, setPasswordUser] = useState('')
  
  

  
  function handleLogin(event: FormEvent){
    event.preventDefault()

    api.post('/user/login', {
      email: emailUser,
      password: passwordUser //onSubmit={handleLogin}        
    }).then((response) =>{
      if(!response.data.auth){
        alert('Não autorizado')
        return;
      }
      localStorage.setItem("token","Bearer " + response.data.token)
      handleAuth()
      history.push('/user')
    })
  }

  return (

    <div className="login-page">
      <form action=""> 
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

        <button onClick={handleLogin} type="submit" className="button-form">
          Login
        </button>
      </form>

      <div className="create-account">
        Don't have account? <Link to="/user/create">Sign Up</Link>
      </div>
    </div>
  )
}

export default LoginPage;