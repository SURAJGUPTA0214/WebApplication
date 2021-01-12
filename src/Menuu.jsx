import react from "react";
import reactdom from "react-dom";
import {NavLink} from "react-router-dom";
const Menuu =()=>{
    const navstyle ={
        backgroundColor: '#515168',
        lineHeight:'45px',
        color:'white !important',
        justifyContent:'space-around',
        display:'flex',
    }
    return (
        <>
        <div style={navstyle}>
        <NavLink exact to="/"> New </NavLink>
        <NavLink exact to="/outfordelivery"> Outfordelivery </NavLink>
        <NavLink exact to="/completed"> completed </NavLink>
        <NavLink exact to="/rejected"> Rejected </NavLink>
        </div>
        
        </>
    )
}
export default Menuu;