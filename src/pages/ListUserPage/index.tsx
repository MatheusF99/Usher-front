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
  const [users, setUsers] = useState<User[]>([])
  
  useEffect(() => {
    api.get('/users', {
      headers:{
        authorization: localStorage.getItem('token')
      }
    }
    ).then(response =>{
      setUsers(response.data)
    })
  }, [])
  

  return (
    <div className="home-page">
      <h1>Hello world</h1>
      <div className="box-users">
      {
        users.map(user =>{
          return(
            <div className="info-user">
              <p key={user.id}> {user.name} </p>
              <p> {user.email} </p>
              <img src={user.images[0].url} alt={user.name}/>
            </div>
          )
        })
      }
      </div>
    </div>
  );
}

export default HomePage
