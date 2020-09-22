import React, {useState} from 'react';
//useState is the Hook for handling state
export default function CounterExample(){
//State has declared with initial value
const [count, setCount] = useState(0);
return(
    <div>
        <p>You have clicked {count} times</p>
        {count >= 10 ? <p>Counter reached maximum limit </p>:''}
        <button onClick={() =>  setCount(count >= 10 ? count : count + 1)}> Add Count</button>
        <button onClick={() =>  setCount(count > 0 ? count - 1 : count)}> Minus Count</button>
        <button onClick={() =>  setCount(0)}> Reset Count </button>
    </div>
);
}
