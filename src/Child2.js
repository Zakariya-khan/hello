import React, { useReducer } from 'react' ;
import CounterReducer from './CounterReducer.js';
const Child2 = () => {
  let [state, dispatch] = useReducer(CounterReducer);
  console.log(state)
  return <div></div>;
};

export default Child2;
