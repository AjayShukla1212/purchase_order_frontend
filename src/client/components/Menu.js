import React,{useState, useEffect} from 'react';

import { Table, Space, Button } from 'antd';

import { useNavigate, Link } from 'react-router-dom';

import axios from 'axios';

import { MAIN_URL } from '../../constant';
import ViewPo from './ViewPoNumber';

const getId = async(val)=>{
  await fetch(`https://cold-ghosts-shop-183-82-114-140.loca.lt/api/v1/purchaseorders${val}`)
  .then(temp =>temp.data.json())
  .then(result=>{
    console.log(result);
    return <ViewPo report = {result}/>
  })
}


 const handleClick = (e) => {
    e.preventDefault();
    console.log('The link was clicked.');
  //   await fetch(`https://a0f1-183-82-114-140.in.ngrok.io/api/v1/purchaseorders/${val}`)
  // .then(temp =>temp.data.json())
  // .then(result=>{
  //   console.log(result);
  //   return <ViewPo report = {result}/>
  // })
  };

const columns = [
  // {
  //   title: 'Id',
  //   dataIndex:'id',
  //   key: 'id',
  //   render: text => <a  onClick={handleClick} >{text}</a>
  //   // href={`https://a0f1-183-82-114-140.in.ngrok.io/api/v1/purchaseorders/${text}`}
  // },

  // {
  //   title: 'Id',
  //   key: 'id',
  //   render: (text, record) => (
  //     <Space size="middle">
  //       <a  href={`https://a0f1-183-82-114-140.in.ngrok.io/api/v1/purchaseorders/${record.id}`}>{text}</a>
  //       {/* <Button name="update" type="primary" shape="round" size='large'>Update</Button>
  //       <Button name="delete" type="danger" shape="round" size='large'>Delete</Button> */}
        

  //     </Space>
  //   ),
  // },
  
  {
    title: 'PO Number',
    dataIndex:'po_number',
    key: 'po_number',
     render: (text,record) => <a onClick={handleClick} href={`https://cold-ghosts-shop-183-82-114-140.loca.lt/api/v1/purchaseorders/${record.id}`}>{text}</a>
   },
  {
    title: 'Owner Name',
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
        <Link to={{pathname: `/update/${record.id}`}}><Button name="update" type="primary" shape="round" size='large'>Update</Button></Link>
        <Button name="delete" type="danger" shape="round" size='large'>Delete</Button>
      </Space>
    ),
  },

  
];



const Menu = () => {
   const [invoice,setInvoice] = useState([]);

  
  useEffect(() =>{
    fetch("https://cold-ghosts-shop-183-82-114-140.loca.lt/api/v1/purchaseorders")
      .then(res => res.json())
      .then((result)=>{
        setInvoice(result);
      }).then(console.log(invoice))
  },[])

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
   fetchData().then(res=>{console.log(res)
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