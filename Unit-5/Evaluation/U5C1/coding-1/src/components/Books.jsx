import { useState } from "react";

export function Books(props) {
    const [books, setBooks] = useState(13);

    const handleChange = (value) => {
        setBooks(books + value);
    }
    return (
        <div className="items">
            <span>Books:</span>
    <button className="addBook" onClick={()=>{handleChange(1)}}>
        +
    </button>
    <button className="remBook" onClick={()=>{handleChange(-1)}}>
        -
    </button>
            <span className="totalBooks">{ books}</span>
</div>

    )
}