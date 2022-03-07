import { useState } from "react";

export function Notebooks(props) {
    const [notebooks, setNotebooks] = useState(44);

    const handleChange = (value) => {
        setNotebooks(notebooks + value);
    }
    return (
        <div className="items">
            <span>Notebooks:</span>
    <button className="addNotebook"  onClick={()=>{handleChange(1)}}>
        +
    </button>
    <button className="remNotebook"  onClick={()=>{handleChange(-1)}}>
        -
    </button>
            <span className="totalNotebooks">{ notebooks}</span>
</div>

    )
}

