import { useState } from "react"
import { GroceryInput } from "./GroceryInput"
import { GroceryList } from "./GroceryList";
import { v4 as uuid } from "uuid";

export const Grocery = () => {
    const [groce, setGroce] = useState([]);

  //  const [list, setList] = useState([]);

    const addToList = (title) => {
        const payload = {
            title,
            status: false,
            id:uuid()

        }
        setGroce([...groce, payload]);
        //console.log(groce)
    }
    const handleDelete = (id) => {
       // alert(id);
        setGroce(groce.filter((del)=>del.id!==id))
    }
        

    return <div>
        <GroceryInput addToList={addToList}/>
        {groce
            // .filter((item) => (
            //     list.map((e) => (
            //         item.id===e.id ? setGroce([...groce,item]): setGroce
            //     ))
            // ))
            .map((item) => (
            <GroceryList
                handleDelete={handleDelete}
                key={item.id}
                {...item} />
            ))}
    </div>
}