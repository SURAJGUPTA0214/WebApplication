import react from 'react';
import reactdom from "react-dom";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"

const Button =(props)=>{
    return (
        <>
        <button className={props.class}> {props.value}</button>
        </>
    )
}
export default Button;