import { useEffect, useState } from "react"


export const Todos = () => {
    const [counter1, setCounter1] = useState(0);

    const [counter2, setCounter2] = useState(0);

    console.log("before effect")

    useEffect(() => {
        console.log("inside effect 1")
    },[counter1]);

    useEffect(() => {
        console.log("inside effect 2")
    },[counter2]);


    console.log("after effect") 
    
    return <div>Todos: <button
        onClick={() => {
            setCounter1(counter1 + 1);
    }}
    >Add To </button>
        <button
            onClick={() => {
                setCounter2(counter2 + 1);
        }}
        >Add To 2</button>
    </div>
}