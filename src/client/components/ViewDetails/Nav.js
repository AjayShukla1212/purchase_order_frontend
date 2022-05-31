import { Menu } from 'antd';
import Comments from './Comments';
import PoDetails from './PoDetails';
import History from './History'; 
import { useState } from 'react';
const PoNav = (props) => {
    const [isflag, setisflag] = useState(true);
    const [isflag1, setisflag1] = useState(false);
    const [isflag2, setisflag2] = useState(false);
    return (
            <div>
                <Menu mode="horizontal" defaultSelectedKeys={['details']}>
                    <Menu.Item key="details" onClick={() => { setisflag(true); setisflag1(false); setisflag2(false); }}>
                        Details
                    </Menu.Item>
                    <Menu.Item key="History" onClick={() => { setisflag(false); setisflag1(true); setisflag2(false); }}>
                        History
                    </Menu.Item>
                    <Menu.Item key="Comments" onClick={() => { setisflag(false); setisflag1(false); setisflag2(true); }}>
                        Comments
                    </Menu.Item>

                </Menu>
                {isflag ? <PoDetails data={props.data}/> : <h1></h1>}
                {isflag1 ? <History/> : <h1></h1>}
                {isflag2 ? <Comments/> : <h1></h1>}
            </div>           
    )
};

export default PoNav;