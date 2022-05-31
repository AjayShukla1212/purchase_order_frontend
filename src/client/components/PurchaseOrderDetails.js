import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import View from './PoDetails';

const details = () =>{
    return(
        <div>
        <h1>gfhdgsdf</h1>
    </div>
    )
};
        


const PoNav = () => {
    const[isflag, setisflag]=useState(true);
    
    
    

    return (
        <div>
        <Menu mode="horizontal" defaultSelectedKeys={['details']}>
            <Menu.Item key="details" onClick={<View/>}>
                Details
                
            </Menu.Item>
            <Menu.Item key = "History" onClick={()=>console.log("hi")}>
                History
            </Menu.Item>

            <Menu.Item key = "Comments">
                Comments
            </Menu.Item>

        </Menu>
        <View/>
        </div>
    )
};

export default PoNav;