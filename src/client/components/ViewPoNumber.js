import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import PoNav from './PurchaseOrderDetails';

const ViewPo = ()=>{

    return(
        <div className='Main-section'>
            <br/>
            <br/>
            <table>
                <tr>
                    <td style={{padding: '20px' }}>
                        
                        <img style={{ width: '60%' ,height:'50%' }}src="https://www.freshbooks.com/wp-content/uploads/invoice-template-blue-985x1280.png"/>
                    </td>
                    <td> 
                        <div>
                            <PoNav/>                                    
                        </div>
                    </td>
                </tr>
            </table>

        </div>

        
    )
}


export default ViewPo;