import React, { useEffect, useState } from 'react';
import { Select, Form } from 'antd';
import MiniDesc from './components/after_view_details';
const { Option } = Select;

function ShowDetails() {
    const [report, setreport] = useState([]);
    const [report_id, setreport_id] = useState({});
    const [isSelect, setSelect] = useState(false);
    const setforgetdetails = async () => {
        await fetch(`https://a0f1-183-82-114-140.in.ngrok.io/api/v1/purchaseorders`)
            .then(res => console.log(res))
            .then((result) => {
                console.log(result);
                setreport_id(result);
                //setSelect(true)
            }
            )
    }
    useEffect(() => {
        // fetch("http://localhost:8080/getreport")
        //     .then(res => res.json())
        //     .then((result) => {
        //         setreport(result);
        //     }
        //     )
        fetch(`https://e150-183-82-114-140.in.ngrok.io/api/v1/purchaseorders`)
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                //setreport_id(result);

            }
            )
        console.log(report_id)
    }, [isSelect])
    function fun() {
        setSelect(!isSelect);
        console.log(isSelect);
    }
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


                    >
                        <Select placeholder='select vendor name'  >

                            <Option onClick={fun}>{report_id.name}</Option>

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