import { useDispatch, useSelector } from "react-redux";
import { addCount } from "../Redux/action";

export const Counter = () => {
    const dispatch = useDispatch();

    const count = useSelector((store => {
        return store.count;
    }))
    return (
        <div>
            <h2>counter: { count}</h2>
            <button onClick={() => {
                    dispatch(addCount(1));
            }}>Add 1</button>
        </div>
    )
}