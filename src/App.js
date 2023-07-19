import './App.css';
import Form from './Components/Form';
import smart from '../src/Images/Image.png'

function App() {
  return (
    <div className="App">
      <img src={ smart} alt='Loading...'/>
      <Form/>
    </div>
  );
}

export default App;
