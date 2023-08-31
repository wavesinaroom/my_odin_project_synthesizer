import Carrier from "./components/carrier.js";
import Modulator from "./components/modulator";
import LFO from "./components/lfo";
import Filter from "./components/filter";
import Envelope from "./components/envelope";
import Keyboard from "./components/keyboard";
import Login from "./components/login";
import Logout from "./components/logout";
import {Profile} from './components/profile.js'
import Default from "./components/default.json"
import {useState} from "react";

function App() {
  const [signed,setSigned] = useState(false);

  return(
    <>
      <Profile.Provider value={{settings:Default}}>
    
      </Profile.Provider>
    </>
  );
}

export default App;
