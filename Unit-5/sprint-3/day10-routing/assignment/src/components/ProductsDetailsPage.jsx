import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductsDetailsPage = () => {
    const { id } = useParams();
   // console.log(id)
    const [product, setProduct] = useState({});

    const getProducts = () => {
        axios.get(`http://fakestoreapi.com/products/${id}`)
            .then((res) => {
            
               // console.log(res);
                setProduct(res.data);

        })
    }

    useEffect(() => {
        getProducts();
    },[])
  return (
    <>
      <div
        style={{
          display: "flex",
          paddingTop: "50px",
          justifyContent: "center",
          textAlign: "left",
        }}
      >
        <img src={product.image} alt="" />
        <div className="productDetails" style={{ padding: "20px" }}>
          <div>
            <h2 className="productName">{product.title}</h2>
            <h5 className="productPrice">Price : {product.price}</h5>
          </div>
          <h5>Specifications : </h5>
          <div style={{ width: "700px", paddingLeft: "30px" }}>
            {/* Show Product specification here */}
          </div>
        </div>
      </div>
    </>
  );
};