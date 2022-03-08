import { useState } from "react"
import { GroceryInput } from "./GroceryInput"
import { GroceryList } from "./GroceryList";

export const Grocery = () => {
    const [groce, setGroce] = useState([]);

    const addToList = (data) => {
        setGroce([...groce, data]);
    }

    return <div>
        <GroceryInput addToList={addToList}/>
        {groce.map((e) => (
            <GroceryList list={e} />
            ))}
    </div>
}