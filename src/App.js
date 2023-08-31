import './App.css';
import {Profile} from './components/profile.js'
import Keyboard from './components/keyboard.js';
import Default from "./components/default.json"

function App() {
  const profile = {settings: Default}
  return(
    <>
      <Profile.Provider value={profile}>
        <Keyboard/> 
      </Profile.Provider>
    </>
  );
}

export default App;
