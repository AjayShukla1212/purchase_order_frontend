import React from 'react';


const Details = (props) => {
    
    return (
        <div>
            <table style={{marginTop: "30px"}}>                   
                <tr>
                    <th>Purchase Order#</th>
                    <td>{props.data.po_number}</td>
                </tr>
                <tr>
                    <th>PO Date</th>
                    <td>25/01/2022</td>
                </tr>
                <tr>
                    <th>Payment Due Date</th>
                    <td>{props.data.delivery_date}</td>
                </tr>
                <tr>
                    <th>Payment Terms</th>
                    <td>Due on receipt</td>
                </tr>
                <tr>
                    <th>Tax</th>
                    <td>GST 5[5%]</td>
                </tr>
                <tr>
                    <th>Amount</th>
                    <td>Rs. {props.data.amount}</td>
                </tr>
                <tr>
                    <th>CGST % </th>
                    <td>Rs. {props.data.igst}</td>
                </tr>
                <tr>
                    <th>SGST % </th>
                    <td>Rs. {props.data.sgst}</td>
                </tr>
                <tr>
                    <th>TDS % </th>
                    <td>Rs. {props.data.tds}</td>
                </tr> 
            </table>
            <br/>
            <br/>
            <h2>Attachments</h2>
            <div></div>
        </div>
    )
}

export default Details;