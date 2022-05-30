import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import ViewPo from './ViewPoNumber';

const PoNav = () => {
    
    const detailsComp =() =>{
        return(
            <div>
                <ViewPo/>
            </div>
        )
    }
    

    return (
        <Menu mode="horizontal" defaultSelectedKeys={['details']}>
            <Menu.Item key="details" onSelect={detailsComp}>
                Details
                
            </Menu.Item>
            <Menu.Item key = "History">
                History
            </Menu.Item>

            <Menu.Item key = "Comments">
                Comments
            </Menu.Item>

        </Menu>
    )
};

export default PoNav;