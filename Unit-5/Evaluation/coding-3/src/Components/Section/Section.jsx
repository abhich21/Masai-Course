import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";

export const Section = () => {
  const { section } = useParams();

  const [data, setData] = useState();
  // you will receive section name from URL here.
  // Get books for only this section and show
  //   Everything else is same as Home page
  useEffect(() => {
    axios.get("http:localhost:8080/books").then((res) => {
      setData(res.data)
    })
  },[])

  const Main = styled.div`
    /* Same as Homepage */
  `;

  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        {
          section
        }
      </h2>
      <SortAndFilterButtons handleSort={"give sorting function to component"} />

      <Main className="sectionContainer">
        {data.filter((el) => {
          if(el.section == section){
            return true;
          }else{
          return false;
          }
        }).map((el, i) => {
          return <div key={i}><BookCard id={el.id} imageUrl={el.imageUrl} title={el.titile} price={ el.price}/></div>
       })}
        
      </Main>
    </>
  );
};
