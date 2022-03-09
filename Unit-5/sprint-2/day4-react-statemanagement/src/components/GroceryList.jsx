export const GroceryList = ({title,status,id, handleDelete}) => {
    return (<div>
        <p>{title} <button id="btn" onClick={() => {
           // console.log();
            handleDelete(id)
        }}>Delete</button></p>
        
    </div>
    )}