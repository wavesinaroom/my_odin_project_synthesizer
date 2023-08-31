import {Profile} from './components/profile.js'
import Carrier from "./components/carrier.js";
import Default from "./components/default.json"

function App() {
  const [signed,setSigned] = useState(false);

  return(
    <>
      <Profile.Provider value={Default}>
        <Keyboard/> 
      </Profile.Provider>
    </>
  );
}

export default App;
