import { useState } from "react";

export function Counter(props) {
    const [counter,setCounter] = useState(0);
    
    const handleChange = (value) => {
       
        setCounter(counter + value);
    }

    return(
    <div>
            <h3>counter: {counter}</h3>
            <button onClick={() => {handleChange(1)}}>Add</button> 
            <button onClick={() => {
                if (counter >= 1) {
                handleChange(-1);
                }
            }}> Subtract</button>
            <button onClick={() => {
                setCounter(counter * 2);
            }}>x2</button>
        </div>
    )
}