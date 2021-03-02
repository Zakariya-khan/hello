import React, { useState } from 'react';
import './App.css';
import Products from './IOTSOL.js';
import {Counter} from './Message.js';


export default function App() {
  let [count, setcount] = useState(1);
  let [ isMOrning , setMorning] = useState(true)
  return (
    <div className={` box ${isMorning ? 'daylight' : ''}` }>
      <h1> Day time = {isMorning ? 'Morning' : 'Night'}</h1>
      <h1> Trending Products </h1>
      <Products product1=" Water Monitoring Device" product2=" Face Detector" product3=" Heat Sensor" />
      {/* <h1>{count}</h1> */}
      <Counter  counter = {count}/>
      <button onClick={
        () => setcount(count + 1)
      }> Update Counter </button>
    </div>
  );
}


