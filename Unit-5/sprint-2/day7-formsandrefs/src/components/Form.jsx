import { useState } from "react";
import axios from "axios";

export const Forms = () => {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        address: "",
        department: "",
        salary: "",
        marritial_status: "",
              
    });

    const handleChange = (e) => {
       // console.log(e.target)
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       // console.log(formData);
        axios.post("http://localhost:3003/employees", formData);
        setFormData({
         name: "",
        age: "",
        address: "",
        department: "",
        salary: "",
        marritial_status: "",
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <h3>Employee Details</h3>
            <input id="name" type="text" onChange={handleChange} placeholder="enter name" value={ formData.name}/>
            <br/>
            <input id="age" type="number" onChange={handleChange} placeholder="enter age" value={ formData.age} /> <br />
            <input id="address" type="text" onChange={handleChange} placeholder="enter address" value={ formData.address}/>
             <label>Department</label>
            <select id="department" onChange={handleChange}>
                <option>--------</option>
                <option>Tech</option>
                <option>IT</option>
                <option>Technician</option>
            </select> <br />
             <input id="salary" type="number" onChange={handleChange} placeholder="enter salary" value={ formData.salary}/> <br /> 
            
             <input type="submit" value="submit"/>
        </form>
    )
}