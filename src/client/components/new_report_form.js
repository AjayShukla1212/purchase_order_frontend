import React from 'react'
import { DatePicker } from 'antd';
import { InputNumber } from 'antd';
import { Select, Form, Input, Button } from 'antd';
import { useState } from 'react';
import './new_report.css';
import { MAIN_URL } from '../../constant';
import Upload_page from './main_form';
const { Option } = Select;

function Demo() {
    debugger;
    const [po_number, setpo_number] = useState(0)
    const [company_name, setcompany_name] = useState('')
    const [po_date, setpo_date] = useState('')
    const [vendor_name, setvendor_name] = useState('')
    const [shipping_method, setShipping_method] = useState('')
    const [payment_terms, setpayment_term] = useState('')
    const [required_date, setrequired_date] = useState('')
    const [item_description, setitem_discription] = useState('')
    const [quantity, setquantity] = useState(0)
    const [item_amount, setitem_amount] = useState(0)
    const [issubmitted, setIsSubmitted] = useState(false);
    const handle_po_Date = (date, dateString) => {
        setpo_date(dateString);

    }
    const handleDate = (date, dateString) => {
        setrequired_date(dateString);

    }
    const setShipping_method_in = (value) => {
        setShipping_method(value);
    }
    const setquantity_in = (value) => {
        setquantity(value);
    }
    const setpo_number_in = (value) => {
        setpo_number(value);
    }

    const setitem_amount_in = (value) => {
        setitem_amount(value);
    }
    const onFinish = (values) => {
        const student = { po_number, company_name, po_date, vendor_name, shipping_method, payment_terms, required_date, item_description, quantity, item_amount }
        //console.log(student);
        setIsSubmitted(true);
        fetch(MAIN_URL, {
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
        <div className='form'>

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
                <h1>Add new Purchase Order</h1>
                <div className='input-container'>
                    <Form.Item
                        label="P.O Number "
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
                <div className='input-container'>
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
                </div>
                <div className='input-container'>
                    <Form.Item
                        label="PO Date"
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
                        label="Vendor Name"
                        name="vendor_name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input vendor Name!',
                            },
                        ]}
                    >
                        <Input placeholder="Enter Vendor Name" value={vendor_name}
                            onChange={(e) => setvendor_name(e.target.value)} />
                    </Form.Item>
                </div>
                <div className='input-container'>
                    <Form.Item
                        label="Shipping Method"
                        name="Shipping_method"
                        rules={[
                            {
                                required: true,
                                message: 'Please input Shipping method!',
                            },
                        ]}
                    >
                        <Select placeholder='enter shipping method' value={shipping_method}
                            onChange={setShipping_method_in}>
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
                        name="payment_term"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Payment Term!',
                            },
                        ]}
                    >
                        <Input placeholder="Enter Payment Term" value={payment_terms}
                            onChange={(e) => setpayment_term(e.target.value)} />
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
                        label="Item Description"
                        name="item_dis"
                        rules={[
                            {
                                required: true,
                                message: 'Please input Item Description!',
                            },
                        ]}
                    >
                        <Input placeholder='enter Item Description' value={item_description}
                            onChange={(e) => setitem_discription(e.target.value)} />
                    </Form.Item>
                </div>
                <div className='input-container'>
                    <Form.Item
                        label="Quantity"
                        name="quantity"
                        rules={[
                            {
                                required: true,
                                message: 'Please input Number of Item!',
                            },
                        ]}
                    >
                        <InputNumber placeholder="Enter No. of Item" value={quantity}
                            onChange={setquantity_in} />
                    </Form.Item>
                </div>
                <div className='input-container'>
                    <Form.Item
                        label="Rate of Product"
                        name="rate"
                        rules={[
                            {
                                required: true,
                                message: 'Please input Rate of Product!',
                            },
                        ]}
                    >
                        <InputNumber placeholder='enter Rate of Product' value={item_amount}
                            onChange={setitem_amount_in} />
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