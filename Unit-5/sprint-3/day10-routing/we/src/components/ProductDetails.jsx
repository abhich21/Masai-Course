import { useParams } from "react-router-dom"

export const ProductDetails = () => {
    const {id} = useParams();
   // console.log('params:', id)

    return (
        <div>
  
           <h2> you are seeing details of {id}</h2>
        </div>
    )
}