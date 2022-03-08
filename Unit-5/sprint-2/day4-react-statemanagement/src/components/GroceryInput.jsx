import { useState } from "react";

export const GroceryInput = ({addToList}) => {
    const [text, setText] = useState("");

    return <div>
        
        <input type="text"
            onChange={(e) => {
                //console.log("value", e);
                setText(e.target.value)
            }}/>
        <button
           
            onClick={() => {
                addToList(text);
                
        }}
        >Add</button>
    </div>
}