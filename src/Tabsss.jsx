import react, { useState } from 'react';
import reactdom from "react-dom";
import {Tabs, Tab, AppBar} from "@material-ui/core";

const Tabsss =()=>{
    const [value, setvalue] = useState();

    const tabposition =(event)=>{
        console.log(event.value);
        setvalue(value);
    }
    return (
        <>
        <AppBar > 
            <Tabs value = {value} onChange={tabposition}>
                <Tab label="item1"/>
                <Tab label="item2"/>
                <Tab label="item3"/>
                <Tab label="item4"/>
            </Tabs>
        </AppBar>
        </>
    )
}
export default Tabsss;