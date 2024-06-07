import styled from "styled-components";
import { MybuttonProps } from "./Mybutton.types";

const Stylebutton =styled.button<{disabled:boolean}>
`
background-color: ${({ disabled }) => (disabled ? 'grey' : 'blue')};
color: white;
padding: 10px 20px;
border: none;
border-radius: 5px;
cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
font-size: 16px;
font-weight: bold;
transition: background-color 0.3s, transform 0.2s;

&:hover {
    background-color: ${({ disabled }) => (disabled ? 'grey' : 'darkblue')};
    transform: ${({ disabled }) => (disabled ? 'none' : 'scale(1.05)')};
}

&:active {
    transform: ${({ disabled }) => (disabled ? 'none' : 'scale(0.95)')};
}

&:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
}

`;
const Mybutton=({disabled=false,label="button"}:MybuttonProps) =>{

    return <Stylebutton disabled={false}>hi</Stylebutton>;
}

export default Mybutton ;