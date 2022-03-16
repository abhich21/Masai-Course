import { useNavigate } from "react-router-dom"

export const Login = () => {
    const navigate = useNavigate();
    return (<div>
        <input type="text" placeholder="enter userId" />
        <input type="text" placeholder="enter password" />
        <button onClick={() => {
            //auth etc. get token...
            navigate("/");
        }}
        >LogIn</button>
    </div>)
}