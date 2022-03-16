import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";

export const UserDetails = () => {
    const { userid } = useParams();
    const [user, setUser] = useState();

    useEffect(() => {
        axios.get(`https://reqres.in/api/users/${userid}`)
        
    }, []);
    if (false) {
        //take user to login page
        return <Navigate to={"/login"} />
    }

    return (
        <div>user detais of id: {userid}</div>
    )
}