import {Profile} from './components/profile.js'
import Carrier from "./components/carrier.js";
import Default from "./components/default.json"

function App() {

  return(
    <>
      <Profile.Provider value={{settings:Default}}>
        <Carrier/>
      </Profile.Provider>
    </>
  );
}

export default App;
