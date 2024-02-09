import './App.css';
import Accordian from './components/accordian/index.jsx';
import Login from './components/login/index.jsx';
import RandomColor from './components/random-color/index.jsx';
import StarRating from './components/star-rating/index.jsx';

function App() {
  return (
    <div className="App">
      {/*Accorian component*/}
      <Login/>
      <Accordian />      
      <RandomColor/>
      <StarRating/>
    </div>
  );
}

export default App;
