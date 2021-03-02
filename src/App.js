import logo from 'react';
import './App.css';
import Products from './IOTSOL.js';


function App() {
  return (
    <div className="App">
      <h1> Trending Products </h1>
      <Products   product1=" Water Monitoring Device" product2=" Face Detector" product3=" Heat Sensor"  />
     
    </div>
  );
}

export default App;
