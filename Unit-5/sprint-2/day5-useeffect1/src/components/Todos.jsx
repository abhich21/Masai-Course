import { useEffect, useState } from "react"

import axios from "axios";


export const Todos = () => {
    const [task, setTask] = useState("");

    const [list, setList] = useState([]);

    useEffect(() => {
        getTasks();
    }, []);
    
    const getTasks = () => {
         axios.get("http://localhost:3001/tasks").then((res) => {
            setList(res.data)
        })
    }
    
    return <div>
        <input type="text" onChange={(e) => setTask(e.target.value)} />
        <button
            onClick={() => {
                fetch("http://localhost:3001/tasks", {
                    method: "POST",
                    body: JSON.stringify({ title: task, status: false }),
                    headers: {
                        "Content-Type" : "application/json",
                    },
                }).then(() => {
                    getTasks();
                });
        }}
        >Save</button>
       { list.map((e)=>(
           <h3 key={e.id}>{ e.title}</h3>
        ))}
    </div>
}