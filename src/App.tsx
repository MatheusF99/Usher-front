import React, {useEffect, useState} from 'react';
import api from './services/api';


interface User{
  id: string,
  name: string;
  email: string;
}

function App() {

  const [users, setUsers] = useState<User[]>([])
  
  useEffect(() => {
    api.get('/users').then(response =>{
      //console.log(response.data);
      setUsers(response.data)
    })
  }, [])
  

  return (
    <div className="App">
      <h1>hello world</h1>
      {
        users.map(user =>{
          return(
            <p key={user.id}> name: {user.name}, email: {user.email}</p>
          )
        })
      }
    </div>
  );
}

export default App;
