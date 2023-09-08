import './App.css';
import Keyboard from './components/keyboard'
import { Profile } from './components/profile';
import Default from './components/default.json'

function App() {
  const profile = {settings: Default}
  return(
    <>
      <Profile.Provider value={profile}>
        <Keyboard/>
      </Profile.Provider>
    </>
  )
}

export default App;
