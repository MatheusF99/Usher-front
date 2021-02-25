import React, {useContext, useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../Context/authContext';
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


  const history = useHistory()
  const {handleLogout} = useContext(AuthContext)
  const [users, setUsers] = useState<User[]>([])
  
  useEffect(() => {
    api.get('/users').then(response =>{
      setUsers(response.data)
    })
  }, [])
  

  function logout(){
    handleLogout()
    history.push('/login')
  }

  return (
    <div className="home-page">
      <h1>Hello world</h1>
      <button type="button" onClick={logout}>Log Out</button>
      <div className="box-users">
      {
        users.map(user =>{
          return(
            <div key={user.id} className="info-user">
              <p > {user.name} </p>
              <p> {user.email} </p>
              {/* <img src={user.images[0].url} alt={user.name}/> */}
            </div>
          )
        })
      }
      </div>
    </div>
  );
}

export default HomePage
