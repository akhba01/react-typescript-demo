import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Container } from './components/Container';

function App() {
  return (
    <div className="App">
      <Container styles={{ border : '1px solid black', padding : '1rem', display : "inline" }} />
    </div>
  );
}

export default App;
