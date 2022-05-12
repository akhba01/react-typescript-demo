import "./App.css";
import { UserContextProvider } from './components/context/UserContext';
import {User} from './components/context/User'
import { DomRef } from "./components/ref/DomRef";
import { MutableRef } from "./components/ref/MutableRef";
function App() {
  return (
    <div className="App">
    <DomRef/>
    <MutableRef/>
    </div>
  );
}

export default App;
