import { useState } from "react";

export function Inkpens(props) {
    const [inkpens, setInkpens] = useState(78);

    const handleChange = (value) => {
        setInkpens(inkpens + value);
    }
    return (
        <div className="items">
            <span>Inkpens:</span>
    <button className="addInkpens"  onClick={()=>{handleChange(1)}}>
        +
    </button>
    <button className="remInkpens"  onClick={()=>{handleChange(-1)}}>
        -
    </button>
            <span className="totalInkpens">{ inkpens}</span>
</div>

    )
}