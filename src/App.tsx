import React from 'react';
import { AuthProvider } from './Context/authContext';
import Routes from './routes';

function App() {

  return(
    <AuthProvider>
      <div className="App">
        <Routes/>
      </div>
    </AuthProvider>
  )

}

export default App;
