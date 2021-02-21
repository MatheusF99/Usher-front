import React, {FormEvent, useState} from 'react';
import { useHistory } from 'react-router-dom'
import api from '../../services/api';


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
        console.log(response.status);
        

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

        <div className="input-conainer">
          <label className="login-label" htmlFor="">Email</label>
          <input 
            className="login-input" 
            type="email"
            value={emailUser} 
            onChange={event => setEmailUser(event.target.value)}
          />
        </div>

        <div className="input-conainer">
          <label className="login-label" htmlFor="">Password</label>
          <input 
            className="login-input" 
            type="password"
            value={passwordUser}
            onChange={event => setPasswordUser(event.target.value)}
          />
        </div>

        <button type="submit">
          Login
        </button>

      </form>
      {loginStatus && (
        <button type='button' onClick={userAutheticate}> Checar autenticação </button> 
       )}
    </div>
  )
}

export default LoginPage;