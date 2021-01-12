import react from "react";
import reactdom from "react-dom";
import Button from "./Button";

const Table =()=>{


    return (
        <>
            <div style={{padding:'20px 20px'}}>
                <h1>Order No</h1>
            </div>
            <table class="table border:none" >
                <thead>
                    <tr>
                    <th scope="col">Room No</th>
                    <th scope="col">Guest</th>
                    <th scope="col">No of Guest</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1000</th>
                    <td>Todd Manager</td>
                    <td>No of Guest</td>
                    </tr>

                    <tr>
                    <th scope="row">Appllicant Name</th>
                    <td> </td>
                    <td>$19.00</td>
                    </tr>

                    <tr>
                    <th scope="row"></th>
                    <td> Tip </td>
                    <td>$0</td>
                    </tr>
                    <tr>
                    <th scope="row"></th>
                    <td> Delievery Charges </td>
                    <td>$5.00</td>
                    </tr>
                    <tr>
                    <th scope="row"></th>
                    <td> Service Fee (18%) </td>
                    <td>$4.32</td>
                    </tr>
                    <tr>
                    <th scope="row"></th>
                    <td> Tax (7.25%) </td>
                    <td>$2.05</td>
                    </tr>
                    <tr>
                    <th scope="row"></th>
                    <td> </td>
                    <td style={{fontWeight:'bold', fontSize:'30px' }}> $30.37</td>
                    </tr>

                </tbody>
            </table>
            <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                <Button class="btn btn-warning" value="Send Message"/>
                <Button value="Cancel Order" class="btn btn-danger"/>
                <Button className ="btn" value="Send For Delievery" class="btn btn-success"/>
            </div>
        </>
    )
}
export default Table;