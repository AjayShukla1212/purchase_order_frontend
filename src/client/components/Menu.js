import React, { useState, useEffect } from 'react';

import { Table, Space, Button } from 'antd';



import { Link, useNavigate } from 'react-router-dom';

import { MAIN_URL } from '../../constant';
import ViewPo from './ViewPoNumber';


const columns = [
  
  {
    title: 'PO Number',
    dataIndex: 'po_number',
    key: 'po_number',
    render: (text, record) => <Link to={{ pathname: `/view/${record.id}` }}>{text}</Link>
  },



  {
    title: 'Owner Name',
    dataIndex: 'company_name',
    key: 'company_name',
  },
  {
    title: 'Vendor Name',
    dataIndex: 'vendor_name',
    key: 'vendor_name',
  },

  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },

  {
    title: 'Expected Delivery',
    dataIndex: 'delivery_date',
    key: 'delivery_date',
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
        <Link to={{ pathname: `/update/${record.id}` }}><Button name="update" type="primary" shape="round" size='large'>Update</Button></Link>
        <Button name="delete" type="danger" shape="round" size='large'>Delete</Button>
      </Space>
    ),
  },


];



const Menu = () => {
  const [invoice, setInvoice] = useState([]);


  
  useEffect(() =>{
    fetch(`${MAIN_URL}`)
      .then(res => res.json())
      .then((result) => {
        setInvoice(result);
      }).then(console.log(invoice))
  }, [])

  useEffect(() => {

    async function fetchData() {



      const res = await fetch('https://cold-ghosts-shop-183-82-114-140.loca.lt/api/v1/purchaseorders', {

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
      {/* {
        invoice.map(temp => (<h1>{temp.id}</h1>) )
      } */}
    </div>



  )

}

export default Menu;