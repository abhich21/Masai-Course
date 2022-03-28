import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const BookDetailsPage = () => {
  // Get book details based on ID whenever user lands on the page;
  // ID will come from route

  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/books/${id}`).then((res) => {
      setData(res.data);
      })

  })


  return (
    <>{data.map((e)=>(
      <div className="bookContainer">
        <h2 className="title">{e.title}</h2>
        <img className="image" src={e.imageUrl} alt="#" />
        <div className="author">{e.author}</div>
        <div className="description">{e.description}</div>
        <div className="price">{e.price}</div>
        <div className="section">{e.section}</div>
        <div className="isbnNumber">{e.isbnNumber}</div>
        <ul className="reviews">

        </ul>
      </div>
    ))
    }
    </>
  );
};
