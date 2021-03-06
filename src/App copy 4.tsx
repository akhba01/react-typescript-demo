import './App.css'
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Status } from './components/Status';

function App() {
  return (
    <div className="App">
     <Status status='success'/>
     <Heading>Placeholder text</Heading>
     <Oscar>
         <Heading>Leonardo Di Caprio</Heading>
     </Oscar>
     <Greet name='John'  IsLoggedIn={true}/>
    </div>
    )
}

export default App
