import React, {useEffect, useState} from 'react'
import api from '../../services/api';

import './list.css'

interface User{
  id: string,
  name: string;
  email: string;
  images: Array<{
    url: string
  }>
}
function HomePage() {
  const [users, setUser] = useState<User>()

  const token = localStorage.getItem('token')
  
  useEffect(() => {
    api.get('/users', {
      headers:{
        authorization: token
      }
    }
    ).then(response =>{
      setUser(response.data)
    })
  }, [token])
  

  return (
    <div className="home-page">
      <h1>seja bem vindo</h1>
      <div className="box-users">
          return(
            <div className="info-user">
              <p> matheus </p>
              <p> mc79846@gmail.com </p>
              {/* <img src={user.images[0].url} alt={user.name}/> */}
            </div>
          )
        
      </div>
    </div>
  );
}

export default HomePage
