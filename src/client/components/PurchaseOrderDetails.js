import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import ViewPo from './ViewPoNumber';
import { useState } from 'react';
const PoNav = () => {
    const [isflag, setisflag] = useState(false);
    // const detailsComp = (

    //     <div>
    //         <ViewPo />
    //     </div>
    // );



    return (
        <div>
        <Menu mode="horizontal" defaultSelectedKeys={['details']}>
            <Menu.Item key="details" onClick={isflag ? <h1>true</h1> : <h1>false</h1>}>
                Details

            </Menu.Item>
            <Menu.Item key="History">
                History
            </Menu.Item>

            <Menu.Item key="Comments">
                Comments
            </Menu.Item>

        </Menu>
        <View/>
        </div>
    )
};

export default PoNav;