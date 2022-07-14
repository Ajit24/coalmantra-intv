//import logo from './logo.svg';
import './App.css';
import StarRating from './Components/StarRating';


function log(value){
  console.log(value);
}


function App() {
  return (
    <div className="App">
     <h2>Rating-star</h2>
     <div className='main'>

      <StarRating onChange={log}/>

     </div>


    </div>
  );
}

export default App;
