import { useState } from 'react';
import './App.css';
import Body from './components/body';
import Login from './components/login'

function App() {
  const [tooglePanel, setTooglePanel] = useState(false)
  return(
    <>
      {tooglePanel?
        <Body/>
        :
        <Login/>
      }
    </>
  );
}

export default App;
