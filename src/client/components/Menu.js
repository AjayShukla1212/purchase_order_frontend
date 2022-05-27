import React, { useState, useEffect } from 'react';

import { Table, Space, Button } from 'antd';

import { useNavigate } from 'react-router-dom';
import { MAIN_URL } from '../../constant';


const columns = [
  {
    title: 'Purchase Order',
    dataIndex: 'po_number',
    key: 'po_number',
  },
  {
    title: 'Company Name',
    dataIndex: 'company_name',
    key: 'company_name',
    // render: text => <a>{text}</a>,
  },
  {
    title: 'Vendor Name',
    dataIndex: 'vendor_name',
    key: 'vendor_name',
  },

  {
    title: 'Shipping Method',
    dataIndex: 'shipping_method',
    key: 'shipping_method',
  },

  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },

  {
    title: 'Item Amount',
    dataIndex: 'item_amount',
    key: 'item_amount',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        {/* <a>Invite {record.name}</a>
        <a>Delete</a> */}
        <Button name="update" type="primary" shape="round" size='large'>Update</Button>
        <Button name="delete" type="danger" shape="round" size='large'>Delete</Button>

      </Space>
    ),
  },
];



const Menu = () => {
  const [invoice, setInvoice] = useState([]);
  // useEffect(() =>{
  //   fetch("https://b70c-183-82-114-140.in.ngrok.io/api/v1/invoices")
  //     .then(res => res.json())
  //     .then((result)=>{
  //       setInvoice(result);
  //     }).then(console.log(invoice))
  // },[])

  useEffect(() => {

    async function fetchData() {



      const res = await fetch('http://localhost:8080/getreport', {

        method: "GET",
        headers: {
          "Accept": "application/json",
        }
      })

      return await res.json();
    }
    fetchData().then(res => {
      console.log(res)
      setInvoice(res)
    })

    console.log(invoice)

  }, []);
  let navigate = useNavigate();
  return (


    <div style={{ padding: "20px" }}>
      <Button type="primary" shape='round' size='large' onClick={() => { navigate("/newreport") }}> + Add Purchase Order</Button>
      {/* <Button type="primary" shape='round' size='large' onClick={() => { navigate("/upload") }}> + Upload</Button>
      <Button type="primary" shape='round' size='large' onClick={() => { navigate("/getdetails") }}> + GetDetails</Button> */}
      <Table columns={columns} dataSource={invoice} />
    </div>



  )

}

export default Menu;