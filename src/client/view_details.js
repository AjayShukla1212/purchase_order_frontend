import React, { useEffect, useState } from 'react';
import { Select, Form } from 'antd';
import MiniDesc from './components/after_view_details';
const { Option } = Select;

function ShowDetails() {
    const [report, setreport] = useState([]);
    const [report_id, setreport_id] = useState({});
    const [isSelect, setSelect] = useState(false);
    const setforgetdetails = async (value) => {
        await fetch(`http://localhost:8080/getreport/${value}`)
            .then(res => res.json())
            .then((result) => {
                setreport_id(result);
                setSelect(true)
            }
            )
    }
    useEffect(() => {
        fetch("http://localhost:8080/getreport")
            .then(res => res.json())
            .then((result) => {
                setreport(result);
            }
            )
        console.log(report_id);
    }, [report_id, isSelect])


    return (<div>
        <div>

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
                autoComplete="off"
            >

                <div className='input-container'>
                    <Form.Item
                        label="Vendor Name"
                        name="Shipping_method"
                        rules={[
                            {
                                required: true,
                                message: 'Please input Shipping method!',
                            },
                        ]}
                    >
                        <Select placeholder='select vendor name' onChange={setforgetdetails} >
                            {report.map(student => (
                                <Option value={student.id}>{student.vendor_name}</Option>
                            ))
                            }
                        </Select>
                    </Form.Item>

                </div>
            </Form>
        </div>
        {isSelect ? <MiniDesc report={report_id} /> : <h1></h1>

        }
    </div>
    );
}
export default ShowDetails;