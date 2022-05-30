import React from 'react'
import { DatePicker } from 'antd';
import { InputNumber } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Select, Form, Input, Button,Upload } from 'antd';
import { useState } from 'react';
import './new_report.css';
import { MAIN_URL } from '../../constant';
 import Upload_page from './main_form';
import ShowDetails from '../view_details';
const { Option } = Select;
const {TextArea}=Input;
function Demo() {
    debugger;
    const [po_number, setpo_number] = useState(0)
    const [company_name, setcompany_name] = useState('')
    const [date, setpo_date] = useState('')
    const [vendor_name, setvendor_name] = useState('')
    const [descrption,setDescription] = useState('')
    const [payment_terms, setpayment_term] = useState('')
    const [delivery_date, setrequired_date] = useState('')
    const [item_amount, setitem_amount] = useState(0)
    const [total_amount,setTotal]=useState(0)
    const [cgst, setCgst] = useState(0)
    const [sgst, setSgst] = useState(0)
    const [igst, setIgst] = useState(0)
    const [tds, setTds] = useState(0)
    const [issubmitted, setIsSubmitted] = useState(false);
    const handle_po_Date = (date, dateString) => {
        setpo_date(dateString);

    }
    const handleDate = (date, dateString) => {
        setrequired_date(dateString);

    }
    
    const setpo_number_in = (value) => {
        setpo_number(value);
    }

    const setitem_amount_in = (value) => {
        setitem_amount(value);
    }
    const onFinish = (values) => {
        const student = { po_number, delivery_date, date,item_amount,cgst,sgst,igst,tds,descrption};
        //console.log(student);
        setIsSubmitted(true);
        fetch('https://e150-183-82-114-140.in.ngrok.io/api/v1/purchaseorders', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)

        }).then(() => {
            //setIsSubmitted(true);
            console.log("done");
        })
    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const renderform = (
        <div className='form' style={{width:'130%'}}>
        
            <ShowDetails />
            <Form
                name="basic"
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"


                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                
                <div className='input-container'>
                    <Form.Item
                        label="Purchase Order#"
                        name="po_num"
                        rules={[
                            {
                                required: true,
                                message: 'Please input P O Number!',
                            },
                        ]}
                    >
                        <InputNumber placeholder="Enter Company Name"
                            onChange={setpo_number_in} />
                    </Form.Item>
                </div>
                {/* <div className='input-container'>
                    <Form.Item
                        label="Company Name"
                        name="company_name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Company Name!',
                            },
                        ]}
                    >
                        <Input placeholder="Enter Company Name" value={company_name}
                            onChange={(e) => setcompany_name(e.target.value)} />
                    </Form.Item>
                </div> */}
                <div className='input-container'>
                    <Form.Item
                        label="Date"
                        name="date-time-picker"

                        rules={[
                            {
                                required: true,
                                message: 'Please input Product Order Date!',
                            },
                        ]}
                    >
                        <DatePicker
                            onChange={handle_po_Date} />
                    </Form.Item>
                </div>
                <div className='input-container'>
                    <Form.Item
                        label="Required Date"
                        name="date-time"
                        rules={[
                            {
                                required: true,
                                message: 'Please input Required Order Date!',
                            },
                        ]}
                    >
                        <DatePicker placeholder='enter Required Date'
                            onChange={handleDate} />
                    </Form.Item>
                </div>
                <div className='input-container'>
                    <Form.Item
                        label="Payment Term"
                        name="payment_term"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Payment Term!',
                            },
                        ]}
                    >
                        <Select placeholder='enter payment terms' value={payment_terms}
                            onChange={setpayment_term}>
                            <Option value='Payment term1'>Payment term1</Option>
                            <Option value='Payment term2'>Payment term2</Option>
                            <Option value='Payment term3'>Payment term3</Option>
                            <Option value='Payment term4'>Payment term4</Option>
                        </Select>
                    </Form.Item>
                </div>
                <div className='input-container'>
                    <Form.Item
                        label="Amount"
                        name="rate"
                        rules={[
                            {
                                required: true,
                                message: 'Please input Rate of Product!',
                            },
                        ]}
                    >
                        <InputNumber placeholder='Enter the amount ' value={item_amount}
                            onChange={setitem_amount_in} />
                    </Form.Item>
                </div>
                <div className='input-container'>
                    <Form.Item
                        label="CGST %"
                        name="cgst"
                        rules={[
                            {
                                required: true,
                                message: 'Please input Rate of Product!',
                            },
                        ]}
                    >
                        <InputNumber placeholder='Enter the amount ' value={cgst}
                            onChange={(e)=>{setCgst(e.target.value)}} />
                    </Form.Item>
                </div>
                <div className='input-container'>
                    <Form.Item
                        label="SGST %"
                        name="sgst"
                        rules={[
                            {
                                required: true,
                                message: 'Please input Rate of Product!',
                            },
                        ]}
                    >
                        <InputNumber placeholder='Enter the amount ' value={sgst}
                            onChange={(e)=>{setSgst(e.target.value)}} />
                    </Form.Item>
                </div>
                <div className='input-container'>
                    <Form.Item
                        label="IGST %"
                        name="igst"
                        rules={[
                            {
                                required: true,
                                message: 'Please input Rate of Product!',
                            },
                        ]}
                    >
                        <InputNumber placeholder='Enter the amount ' value={igst}
                            onChange={(e)=>{setIgst(e.target.value)}} />
                    </Form.Item>
                </div>
                <div className='input-container'>
                    <Form.Item
                        label="TDS %"
                        name="tds"
                        rules={[
                            {
                                required: true,
                                message: 'Please input Rate of Product!',
                            },
                        ]}
                    >
                        <InputNumber placeholder='Enter the amount ' value={tds}
                            onChange={(e)=>{setTds(e.target.value)}} />
                    </Form.Item>
                </div>
                <div className='input-container'>
                    <Form.Item>
                    <label><strong style={{"padding-right":"2.5em"}}>Total amount</strong></label>
                        <InputNumber  defaultValue={3}/>
                    </Form.Item>
                </div>
                <label>Description</label>
                <div className='input-container'>
                    <Form.Item
                        
                        name="descption"
                       
                    >
                        <TextArea placeholder="Add description to purchase order" rows={4} value={descrption}
                            onChange={(e)=>{setDescription(e.target.value)}} />
                    </Form.Item>
                </div>
                <Upload >
                <label style={{'padding-bottom':'2em'}}><strong>Upload File(s) related to purchase order</strong></label><br/>
    <Button icon={<UploadOutlined />}>Upload</Button>
    <p>Can upload upto 10 files and total 500MB</p>
  </Upload>
                
                <div className='input-container'>
                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                    </Form.Item>
                </div>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button className="button-contain" variant="contained" type="primary" shape='round' size='large' htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
    return (
        <div className="app_category">
            <br />
            <br />
            <h1 >New Purchase Order</h1>
            <table>
                <tr>
                    <td style={{ width: '35%', height: '9em' }}>
                        <Upload_page style={{ position: 'relative' }} />
                    </td>
                    <td>
                        <div className="login-form">
                            {issubmitted ? <div><h2 >You have added new Purchase Order Successfully!</h2>
                                <Button className="button-contain" variant="contained" type="primary" shape='round' size='large' onClick={(e) => { e.preventDefault(); window.location.href = '/newreport'; }}>
                                    + Add New Report
                                </Button>
                            </div> : renderform}
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    );
};
export default Demo;