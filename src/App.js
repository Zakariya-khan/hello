import React, { useState } from 'react';
import './App.css';
import Products from './IOTSOL.js';
import {Counter} from './Message.js';
import  counterContext  from './CounterContext';
// import counterContext from './CounterContext';
import Parent from './Parent.js';
export default function App() {
  let [count, setcount] = useState(1);
  let [isMorning, setMorning] = useState(true)
  return (
     <div 
         className={` box ${isMorning ? 'daylight' : ''}` }> 
        
        <h1> Day time = {isMorning ? 'Morning' : 'Night'}</h1> 
      
      <h1> Trending Products </h1>
      <Products product1=" Water Monitoring Device" product2=" Face Detector" product3=" Heat Sensor" />
      
      <Counter  counter = {count}/>

      <button onClick={()=>setMorning(!isMorning)}> Update Day </button>
      
      <button onClick={
        () => setcount(count + 1)
      }> Update Counter </button>

      <counterContext.Provider value={10}>
        <div>
          <Parent />

        </div>
      </counterContext.Provider> 
    </div>
  );
}


