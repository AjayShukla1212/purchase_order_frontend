import React from 'react';
import './MiniDesc.css';    

import { Descriptions } from 'antd';
const MiniDesc = (props) => {
  return (
    // <Descriptions title="Vendor Info"  >
    //     <Descriptions.Item label="Vendor Name">Nitish Kumar</Descriptions.Item>
    //     <Descriptions.Item label="Email">1810000000</Descriptions.Item>
    //     <Descriptions.Item label="Address">Hangzhou, Zhejiang</Descriptions.Item>
    // </Descriptions>
    <div className='tabledesc'>
      <table>
        <tr>
            <th>Vendor Name:</th>
            <td>{props.name}</td>
        </tr>
        <tr>
            <th>Email Id:</th>
            <td>{props.email}</td>
        </tr>
        <tr>
            <th>Address:</th>
            <td>{props.address}</td>
        </tr>
        
    </table>
    </div>
  )
}

export default MiniDesc;
