import { useDispatch } from "react-redux";
import { addCount } from "../Redux/action";

export const Counter = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <h2>counter: { }</h2>
            <button onClick={() => {
                    dispatch(addCount(1));
            }}>Add 1</button>
        </div>
    )
}