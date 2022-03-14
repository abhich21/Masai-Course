import axios from "axios";
import { useState } from "react";


export const AddHouse = () => {
  const [data, setData] = useState({
    name: "",
    ownerName: "",
    address: "",
    areaCode: "",
    rent: "",
    bachelor: ""
  });

  const [list, setList] = useState([]);

  const addToList = ({name,ownerName, address, araeCode, rent, bachelor}) => {
        const payload = {
          
           name:,
    ownerName,
    address,
    areaCode,
    rent,
    bachelor
           

        }
        setList([...list, payload]);
        //console.log(groce)
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/houses", data);
  };

  const handleChange = (e) => {
    let { className, value, checked, type } = e.target;
    console.log(e.target.value);
    value = type === "checkbox" ? checked : false;
    setData({
      ...data,
      [className] : value
    })
    addToList({name,ownerName, address, araeCode, rent, bachelor})

  }


  return (
    <div className="addHouseContainer">
      <form onSubmit={handleSubmit} addToList={addToList}>
        <label>name</label>
        <input onChange={handleChange} type="text" className="name"  required />
        <br />
        <label>ownerName</label>
        <input onChange={handleChange}  type="text" className="ownerName" required />
        <br />
        <label>address</label>
        <input value={data.address} type="text" className="address" required />
        <br />
        <label>areaCode</label>
        <input onChange={handleChange} type="text" className="areaCode" required />
        <br />
        <label>rent</label>
        <input onChange={handleChange} type="text" className="rent" required />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input onChange={handleChange} checked={data.bachelor} type="checkbox" className="bachelor" />
        <br />
        <label>married</label>
        <input onChange={handleChange} checked={data.bachelor} type="checkbox" className="married" />
        <br />
        <label>image</label>
        <input type="text" className="image" required />
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
