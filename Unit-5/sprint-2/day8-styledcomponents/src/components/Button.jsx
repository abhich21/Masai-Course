import styled from "styled-components";


const Button = styled.button
`
    border: none;
    border: 1px solid blue;
    transition: all 0.3s 0s;
    border-radius: 5px;
    margin-left: 20px;
    padding: 7px 10px;
    margin-bottom: 10px;
    color: ${({theme}) => (
        theme === "light" ? "blue" : "white"
    )
    };
    background-color: ${({theme}) => (
        theme === "light" ? "white" : "blue"
    )
};
      &:hover{
        box-shadow : -3px 3px 5px 2px rgba(0, 0, 255, 0.8);
    }
    `;
  const Primary = styled(Button)`
    color : ${({theme}) => (
        theme === "light" ? "white" : "blue"
    )
};
    background-color : ${({theme}) => (
        theme === "light" ? "blue" : "white"
    )
    };
    `;

const Dash = styled(Button)`
border : 1px dotted blue;
`;

const Text = styled(Button)`
border: none;
color : black;
background-color : transparent;
`;

const Link = styled(Button)`
border: none;
color : ${({ theme }) => (
        theme === "light" ? "blue" : "white"
    )
};
`;



export { Button, Primary, Dash, Text, Link };