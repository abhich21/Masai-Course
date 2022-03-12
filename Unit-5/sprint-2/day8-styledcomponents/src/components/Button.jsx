// import "./Button.css"

// export const Button = ({children}) => {
//     return (
//         <button className="mybutton">{children}</button>
//     )
    
// }

import styled from "styled-components";

const Button = styled.button`
    border: none;
    color: white;
    background-color: blue;
    border-color: 1 px solid blue;
    transition: all 0.3s 0s;
    border-radius: 5px;
    margin-left: 20px;
`;

export { Button };