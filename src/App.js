import { useState } from 'react';
import './App.css';
import Body from './components/body';
import Login from './components/login'

function App() {
  const [logged, setLogged] = useState(false)
  return(
    <>
      {logged?
        <Body setLogged={setLogged}/>
        :
        <Login setLogged={setLogged}/>
      }
    </>
  );
}

export default App;
