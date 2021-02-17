import React, {FormEvent, useState} from 'react'




function CreateUserPage() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(event: FormEvent){
    event.preventDefault()

    console.log(
      {
        name,
        email,
        password
      }
    );
     
  }


  return (
    <div className="create-user-page">

      <form onSubmit={handleSubmit} action=""> 
        <fieldset>

          <legend>Dados</legend>

          <div>
            <label htmlFor="UserName">UserName</label>
            <input type="text" 
              value={name} 
              onChange={event => setName(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email">E-mail</label>
            <input type="email "
              value={email} 
              onChange={event => setEmail(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password"
              value={password} 
              onChange={event => setPassword(event.target.value)}
            />
          </div>

        </fieldset>

        <button className="confirm-button" type="submit">
          Confirmar
        </button>

      </form>
    </div>
  );
}

export default CreateUserPage
