import React, { useReducer } from 'react' ;
import CounterReducer from './CounterReducer.js';
const Child2 = () => {
  let [state, dispatch] = useReducer(CounterReducer, 10);
  console.log(state)
  return <div>
    <h3>Value of reducer state is: {state}</h3>  
    <button onClick={() => dispatch('INCREMENT')}>Increament value in reducer</button>
  </div>;
};

export default Child2;
