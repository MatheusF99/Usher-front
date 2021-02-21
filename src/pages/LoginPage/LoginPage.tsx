import React, {FormEvent, useState} from 'react';


// import { Container } from './styles';

function LoginPage(){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  


  function handleSubmit(event: FormEvent){
    event.preventDefault()

    console.log(
      {
        email,
        password
      }

    )
  }

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} action="">

        <div className="input-conainer">
          <label className="login-label" htmlFor="">Email</label>
          <input 
            className="login-input" 
            type="email"
            value={email} 
            onChange={event => setEmail(event.target.value)}
          />
        </div>

        <div className="input-conainer">
          <label className="login-label" htmlFor="">Password</label>
          <input 
            className="login-input" 
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </div>

        <button type="submit">
          Login
        </button>

      </form>
    </div>
  )
}

export default LoginPage;