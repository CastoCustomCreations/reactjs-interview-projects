import './App.css';
import Accordian from './components/accordian/index.jsx';
import Login from './components/login/index.jsx';
import RandomColor from './components/random-color/index.jsx';

function App() {
  return (
    <div className="App">
      {/*Accorian component*/}
      <Accordian />
      <Login/>
      <RandomColor/>
    </div>
  );
}

export default App;
