import { useState } from "react";

export function Pens(props) {
    const [pens, setPens] = useState(10);

    const handleChange = (value) => {
        setPens(pens + value);
    }
    return (
        <div className="items">
            <span>Pens:</span>
    <button className="addPen"  onClick={()=>{handleChange(1)}}>
        +
    </button>
    <button className="remPen"  onClick={()=>{handleChange(-1)}}>
        -
    </button>
            <span className="totalPens">{ pens}</span>
</div>

    )
}