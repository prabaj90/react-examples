import React, {useEffect, useState} from 'react';
//useEffect will be hook for componentDidMount,DidUpdate,WillUnmount

export default function CounterWithName(){
    const [name, setName] = useState('FB');

    //useEffect() can be called everytime.
    useEffect(() => {
        console.log(`Hi ${name}`)
    });

    //useEffect() will be called only once.
    useEffect(() => {
        alert(`Hello ${name}`)
    }, []);

    //useEffect() will only re-run the side effect if one of the items in this array changes.
    //componentWillUnmount job can be achieved by optionally returning a function from our useEffect().
    useEffect(() => {
        alert(`How are you ${name} ?`)
        return() =>{
            console.log("Unmounted ")
        }
    }, [name]);

    return(
        <div>
            <p> Hi {name} </p>
            <button onClick={() => setName( name === 'FB'?'FaceBook': 'FB' )}> Click to Name Change</button>
        </div>
    );
}