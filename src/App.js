import './App.css';
import Home from './Home'
import StateDirectory from './StateDirectory';
import Share from './Share'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Home /> 

      <Share />

      <StateDirectory /> 
      
      </header>
    </div>
  );
}

export default App;
