import React from 'react'
import { Link } from 'react-router-dom'

function Sucess() {

  return (
    <div>
      <h1>usucario criado com sucesso</h1>

      <Link to='/user'>
        home
      </Link>
    </div>
  )
}

export default Sucess