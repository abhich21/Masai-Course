import { useEffect, useState } from "react"


export const Todos = () => {
    const [task, setTask] = useState("");
    
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
                });
        }}
        >Save</button>
    </div>
}