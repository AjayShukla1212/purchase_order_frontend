import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PoNav from './PurchaseOrderDetails';
import { Menu } from 'antd';
const ViewPo = () => {
    const [isflag, setisflag] = useState(false);
    const { id } = useParams();
    const [Data, setData] = useState({});
    console.log(id);
    useEffect(() => {
        fetch(`https://cold-ghosts-shop-183-82-114-140.loca.lt/api/v1/purchaseorders/${id}`)
            .then(res => res.json())
            .then((result) => {
                setData(result.data);
                console.log(result.data);
            })
    }, [])
    const render = (
        <div>
            <table>
                <tr>
                    <th>Invoice Number# </th>
                    <td>IN000001</td>
                </tr>
                <tr>
                    <th>Purchase Order#</th>
                    <td>{Data.po_number}</td>
                </tr>
                <tr>
                    <th>Invoice Date</th>
                    <td>25/01/2022</td>
                </tr>
                <tr>
                    <th>Payment Due Date</th>
                    <td>{Data.delivery_date}</td>
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
                    <td>Rs. {Data.amount}</td>
                </tr>
                <tr>
                    <th>CGST % </th>
                    <td>Rs. {Data.igst}</td>
                </tr>
                <tr>
                    <th>SGST % </th>
                    <td>Rs. {Data.sgst}</td>
                </tr>
                <tr>
                    <th>TDS % </th>
                    <td>Rs. {Data.tds}</td>
                </tr>
            </table>
        </div>

    );
    return (
        <div className='Main-section'>

            <table>
                <tr>
                    <td style={{ padding: '10px' }}>

                        <img style={{ width: '50%', height: 'auto' }} src="https://www.freshbooks.com/wp-content/uploads/invoice-template-blue-985x1280.png" />
                    </td>
                    <td>

                        <div>
                            <Menu mode="horizontal" defaultSelectedKeys={['details']}>
                                <tr>
                                    <Menu.Item key="details" onClick={() => (setisflag(true))}>
                                        Details

                                    </Menu.Item>

                                </tr>
                                <Menu.Item key="History">
                                    History
                                </Menu.Item>

                                <Menu.Item key="Comments">
                                    Comments
                                </Menu.Item>

                            </Menu>
                            {isflag ? render : <h1></h1>}
                        </div>
                    </td>
                </tr>
            </table>

        </div>


    )
}


export default ViewPo;