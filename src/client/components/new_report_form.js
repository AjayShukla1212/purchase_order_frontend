import React, { useEffect } from 'react'
import { DatePicker } from 'antd';
import { InputNumber } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Select, Form, Input, Button, Upload, Modal } from 'antd';
import { useState } from 'react';
import './new_report.css';
import { MAIN_URL } from '../../constant';
import Upload_page from './main_form';
import ShowDetails from '../view_details';
import moment from 'moment';
const { Option } = Select;
const { TextArea } = Input;
function Demo() {
    debugger;
    // const [po_number, setpo_number] = useState(0);
    // const [date, setpo_date] = useState('')
    // const [description, setDescription] = useState('')
    // const [payment_terms, setpayment_term] = useState('')
    // const [delivery_date, setrequired_date] = useState('')
    // const [amount, setitem_amount] = useState(0)
    // const [cgst, setCgst] = useState(0)
    // const [sgst, setSgst] = useState(0)
    // const [igst, setIgst] = useState(0)
    // const [tds, setTds] = useState(0)
    const [issubmitted, setIsSubmitted] = useState(true);


    const [values,setValues]=useState({
        po_number:'',
        description:'',
        payment_terms:'',
        date:'',
        delivery_date:'',
        amount:0,
        cgst:0,
        sgst:0,
        igst:0,
        tds:0,
        po_doc:'',
        additional_docs:[],
        form_data:''
    })

const {po_number,description,payment_terms,date,delivery_date,amount,cgst,sgst,igst,tds,po_doc,additional_docs,form_data}=values;
const preload=()=>{
setValues({...values,form_data:new FormData()})
}

const handleChange=(name,event)=>{
   
    let value;
    if(event.target){
         value=event.target.value;
    }else{
        value=name === "additional_docs" ? event.fileList :event;
    }

setValues({...values,[name]:value})
// console.log(value)
console.log(additional_docs)
}


//TODO:Have to set file size limitation process
const beforeUpload=(file)=>{
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

    if (!isJpgOrPng) {
        onFinishFailed('You can only upload JPG/PNG file!');
    }
  
    const isLt2M = file.size / 1024 / 1024 < 5;
  
    if (!isLt2M) {
        onFinishFailed('Image must smaller than 2MB!');
    }
  
    return isJpgOrPng && isLt2M;
}

useEffect(()=>{
preload()

},[])
    const onFinish = (values) => {
        
        //console.log(student);
        setIsSubmitted(true);
        fetch(`${MAIN_URL}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values)

        }).then(() => {
            //setIsSubmitted(true);
            console.log(values)
            console.log("done");
            success();
        })
    }
    const onFinishFailed = (errorInfo) => {
        Modal.error({
            title: 'This is an error message',
            content: errorInfo,
          });
    };
    const success = () => {
        Modal.success({
            content: 'Purchase Order Added Successfully!',
        });
    };
    const renderform = (
        <div className='form' style={{ width: '130%' }}>

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
                        <Input placeholder="Enter P O Number" value={po_number}
                            onChange={(e)=>{handleChange('po_number',e)}} />
                    </Form.Item>
                </div>
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
                        value={date}
                            onChange={(e)=>{handleChange('date',e)}} />
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
                        <DatePicker placeholder='enter Required Date' value={delivery_date}
                            onChange={(e)=>{handleChange('delivery_Date',e)}}
                            disabledDate={(current) => {
              let customDate = moment(date).format("YYYY-MM-DD");
              return (current&&current) < moment(customDate, "YYYY-MM-DD");
            }} 
                             />
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
                            onChange={(e)=>{handleChange('payment_terms',e)}}>
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
                        name="amount"
                        rules={[
                            {
                                required: true,
                                message: 'Please input Rate of Product!',
                            },
                        ]}
                    >
                        <InputNumber placeholder='Enter the amount ' value={amount}
                            onChange={(e)=>{handleChange('amount',e)}} />
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
                            onChange={(e)=>{handleChange('cgst',e)}} />
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
                            onChange={(e)=>{handleChange('sgst',e)}} />
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
                            onChange={(e)=>{handleChange('igst',e)}} />
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
                            onChange={(e)=>{handleChange('tds',e)}} />
                    </Form.Item>
                </div>
                <div className='input-container'>
                    <Form.Item>
                        <label><strong style={{ "padding-right": "2.5em" }}>Total amount</strong></label>
                        <InputNumber defaultValue={3} />
                    </Form.Item>
                </div>
                <label>Description</label>
                <div className='input-container'>
                    <Form.Item

                        name="descption"

                    >
                        <TextArea placeholder="Add description to purchase order" rows={4} value={description}
                            onChange={(e)=>{handleChange('description',e)}} />
                    </Form.Item>
                </div>
                <Upload value={additional_docs}
                    onChange={(e)=>{handleChange('additional_docs',e)}}
                    maxCount={5}
                    beforeUpload={beforeUpload}
                    >
                    <label style={{ 'padding-bottom': '2em' }}><strong>Upload File(s) related to purchase order</strong></label><br />
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
                            {issubmitted ? renderform : <h1></h1>}
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    );
};
export default Demo;