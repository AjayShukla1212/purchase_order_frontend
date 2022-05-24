import React, { useState, useEffect } from 'react';

import { Table, Tag, Space, Button } from 'antd';

import { useNavigate } from 'react-router-dom';


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

// const data = [
//   {
//     key: '1',
//     po:'122312',
//     name: 'John Brown',
//     po_date: '12-04-2022',
//     vendor: "Zaggle",
//     shippingMethod: "Cash",
//     paymentTerms: "Lorem Epsum",
//     requiredDate: "12.05.2022",
//     itemDescription: "Something1",
//     quantity: "2",
//     itemAmount: "2134",
//   },
//   {
//     key: '2',
//     po:'122982',
//     name: 'Jim Green',
//     po_date: '12-10-2022',
//     vendor: "Zaggle",
//     shippingMethod: "UPI",
//     paymentTerms: "Lorem Epsum",
//     requiredDate: "02.05.2022",
//     itemDescription: "Something2",
//     quantity: "6",
//     itemAmount: "4124"

//   },
//   {
//     key: '3',
//     po:'122365',
//     name: 'Joe Black',
//     po_date: '21-03-2022',
//     vendor: "Zaggle",
//     shippingMethod: "Card",
//     paymentTerms: "Lorem Epsum",
//     requiredDate: "07.05.2022",
//     itemDescription: "Something3",
//     quantity: "4",
//     itemAmount: "9876"

//   },
// ];


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



      const res = await fetch('https://b70c-183-82-114-140.in.ngrok.io/api/v1/invoices', {

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



  }, []);
  let navigate = useNavigate();
  return (


    <div style={{ padding: "20px" }}>
      <Button type="primary" shape='round' size='large' onClick={() => { navigate("/newreport")}}> + Add Purchase Order</Button>
      <Table columns={columns} dataSource={invoice} />
    </div>



  )

}

export default Menu;