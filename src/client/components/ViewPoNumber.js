import React,{useState} from 'react';
import Upload_page from './main_form';

const ViewPo = ()=>{
    return(
        <div className='Main-section'>
            <br/>
            <br/>
            <table>
                <tr>
                    <td style={{padding: '20px'}}>
                        
                        <img style={{ width: '80%' ,height:'80%' }}src="https://www.freshbooks.com/wp-content/uploads/invoice-template-blue-985x1280.png"/>
                    </td>
                    <td>
                        {/* <div>
                        <h1>Hello</h1>
                        <table>
                            <tr>
                                <th>dfdf</th>
                                <td>Heeeloo</td>
                            </tr>
                            <tr>
                                <th>sdfsd</th>
                                <td>dsfsdf</td>
                            </tr>

                            <tr>
                                <th>dfdf</th>
                                <td>Heeeloo</td>
                            </tr>
                            <tr>
                                <th>sdfsd</th>
                                <td>dsfsdf</td>
                            </tr>
                            <tr>
                                <th>dfdf</th>
                                <td>Heeeloo</td>
                            </tr>
                            <tr>
                                <th>sdfsd</th>
                                <td>dsfsdf</td>
                            </tr>
                        </table>
                        </div> */}
                        
                        <div>
                                    <table>
                                        <tr>
                                            <th>Invoice Number# </th>
                                            <td>In-23123412</td>
                                        </tr>
                                        <tr>
                                            <th>Purchase Order#</th>
                                            <td>Po-000001</td>
                                        </tr>
                                        <tr>
                                            <th>Invoice Date</th>
                                            <td>25/01/2022</td>
                                        </tr>
                                        <tr>
                                            <th>Payment Due Date</th>
                                            <td>25/02/2022</td>
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
                                            <td>Rs. 350.00</td>
                                        </tr>
                                        <tr>
                                            <th>CGST % </th>
                                            <td>Rs.350.00</td>
                                        </tr>
                                        <tr>
                                            <th>SGST % </th>
                                            <td>Rs.350.00</td>
                                        </tr>
                                        <tr>
                                            <th>TDS % </th>
                                            <td>Rs.7000.00</td>
                                        </tr> 
                                    </table>
                        </div>
                    </td>
                </tr>
            </table>

        </div>

        
    )
}


export default ViewPo;