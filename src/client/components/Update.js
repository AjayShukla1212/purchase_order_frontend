import { DatePicker } from 'antd';
import { InputNumber } from 'antd';
import { Alert } from 'antd';
import { Select, Form, Input, Button, Checkbox } from 'antd';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
const { Option } = Select;

function Update() {
    let navigate = useNavigate();
    const { id } = useParams();
    const [invoice, setInvoice] = useState({
        company_name: "",
        vendor_name: "",
        shipping_method: "",
        required_date: "",
        payment_terms: "",
        item_description: "",
        quantity: "",
        item_amount: "",
        isSubmitted: false
    });
    const { company_name, vendor_name, shipping_method, required_date, payment_terms, item_description, quantity, item_amount, isSubmitted } = invoice;
    const onInputChange = e => {
        setInvoice({ ...invoice, [e.target.name]: e.target.value });
    };

    const loadInvoice = async () => {
        const result = await axios.get(`https://cold-ghosts-shop-183-82-114-140.loca.lt/api/v1/purchaseorders/${id}`);
        let data = await result.data;
        setInvoice(data);
    };

    useEffect(() => {
        loadInvoice();
    }, []);


    const onFinish = (values) => {
        setInvoice({ ...invoice, isSubmitted: true });
        fetch(`https://cold-ghosts-shop-183-82-114-140.loca.lt/api/v1/purchaseorders/${id}`, {
            method: 'PUT',
            headers: {
                // 'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(invoice)
        }).then(() => {
            return navigate('/')
        })
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    const renderform = (
        <div className='form'>
            <h1>Update Purchase Order</h1>
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
                        label="Company Name"
                        rules={[
                            {
                                required: false,
                                message: 'Please input your Company Name!',
                            },
                        ]}
                    >
                        <Input name="company_name" value={company_name} onChange={e => onInputChange(e)} />
                    </Form.Item>
                </div>
                {/* <div className='input-container'>
                    <Form.Item
                        label="PO Date"
                        name="po_date"

                        rules={[
                            {
                                required: false,
                                message: 'Please input Product Order Date!',
                            },
                        ]}
                    >
                        <DatePicker value={po_date} placeholder={po_date} onChange={e => onInputChange(e)}/>
                    </Form.Item>
                </div> */}
                <div className='input-container'>
                    <Form.Item
                        label="Vendor Name"
                        rules={[
                            {
                                required: false,
                                message: 'Please input vendor Name!',
                            },
                        ]}
                    >
                        <Input name="vendor_name" value={vendor_name} onChange={e => onInputChange(e)} />
                    </Form.Item>
                </div>
                <div className='input-container'>
                    <Form.Item
                        label="Shipping Method"
                        rules={[
                            {
                                required: false,
                                message: 'Please input Shipping method!',
                            },
                        ]}
                    >
                        <Select name="shipping_method" value={shipping_method}
                            onChange={e => onInputChange(e)}>
                            <Option value='flight'>Flight</Option>
                            <Option value='By Road'>By Road</Option>
                            <Option value='By Train'>By Train</Option>
                            <Option value='By Ship'>By Ship</Option>
                        </Select>
                    </Form.Item>
                </div>
                <div className='input-container'>
                    <Form.Item
                        label="Payment Term"
                        rules={[
                            {
                                required: false,
                                message: 'Please input your Payment Term!',
                            },
                        ]}
                    >
                        <Input name="payment_terms" value={payment_terms} onChange={e => onInputChange(e)} />
                    </Form.Item>
                </div>
                {/* <div className='input-container'>
                     <Form.Item 
                        label="Required Date"
                        // name="required_date"
                        rules={[
                            {
                                required: false,
                                message: 'Please input Required Order Date!',
                            },
                        ]}
                    >
                         <DatePicker value={required_date} placeholder={required_date} onChange={e => onInputChange(e)}/> 
                        <Input name="required_date" value={required_date} placeholder={required_date} onChange={e => onInputChange(e)}/>
                    </Form.Item>
                </div> */}
                <div className='input-container'>
                    <Form.Item
                        label="Item Description"
                        rules={[
                            {
                                required: false,
                                message: 'Please input Item Description!',
                            },
                        ]}
                    >
                        <Input name="item_description" value={item_description} onChange={e => onInputChange(e)} />
                    </Form.Item>
                </div>
                <div className='input-container'>
                    <Form.Item
                        label="Quantity"
                        rules={[
                            {
                                required: false,
                                message: 'Please input Number of Item!',
                            },
                        ]}
                    >
                        <Input name="quantity" value={quantity} onChange={e => onInputChange(e)} />
                    </Form.Item>
                </div>
                <div className='input-container'>
                    <Form.Item
                        label="Enter amount of Item"
                        rules={[
                            {
                                required: false,
                                message: 'Please input amount of Item!',
                            },
                        ]}
                    >
                        <Input name="item_amount" value={item_amount} onChange={e => onInputChange(e)} />
                    </Form.Item>
                </div>
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
                    <Button className="button-contain" variant="contained" type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );

    return (
        <div className="app_category">
            <div className="login-form">
                {isSubmitted ? <Alert
                    message="Success"
                    description="Purchase Order updated successfully."
                    type="success"
                    showIcon
                /> : renderform}
            </div>
        </div>
    );
};

export default Update;