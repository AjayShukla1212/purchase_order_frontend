import React from 'react';
// import './MiniDesc.css';
const MiniDesc = (props) => {
    return (
        <div className='tabledesc'>

            <table>
                <td>
                    <tr>

                        <th>Vendor Id:- </th>

                        <td>{props.report.id}</td>

                    </tr>

                    <tr>

                        <th>PO number:- </th>

                        <td>{props.report.po_number}</td>

                    </tr>

                    <tr>

                        <th>Company Name:- </th>

                        <td>{props.report.company_name}</td>

                    </tr>


                    <tr>

                        <th>PO Date:- </th>

                        <td>{props.report.po_date}</td>

                    </tr>

                    <tr>

                        <th>Vendor Name:- </th>

                        <td>{props.report.vendor_name}</td>

                    </tr>

                    <tr>

                        <th>Shipping Method:- </th>

                        <td>{props.report.shipping_method}</td>

                    </tr>
                </td>
                <td>
                    <tr>

                        <th>Payment Term:- </th>

                        <td>{props.report.payment_terms}</td>

                    </tr>

                    <tr>

                        <th>Required Date:- </th>

                        <td>{props.report.required_date}</td>

                    </tr>

                    <tr>

                        <th>Description:- </th>

                        <td>{props.report.item_description}</td>

                    </tr>
                    <tr>

                        <th>Quantity:- </th>

                        <td>{props.report.quantity}</td>

                    </tr>

                    <tr>

                        <th>Item Amount:- </th>

                        <td>{props.report.item_amount}</td>

                    </tr>
                </td>
            </table>

        </div>

    )

}

export default MiniDesc;