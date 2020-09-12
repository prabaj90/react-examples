import React, {useState} from 'react';
//useState is the Hook for handling state
export default function CounterExample(){
const [count, setCount] = useState(0);
return(
    <div>
        <p>You have clicked {count} times</p>
        {count >= 10 ? <p>Counter reached maximum limit </p>:''}
        <button onClick={() => count >= 10 ? setCount(count) : setCount(count + 1)}> Add Count</button>
        <button onClick={() => count > 0 ? setCount(count - 1): setCount(count)}> Minus Count</button>
        <button onClick={() => setCount(0)}> Reset Count </button>
        </div>
);
}
