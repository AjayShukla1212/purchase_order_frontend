import React,{useState,useEffect} from 'react'
import PoNav from './Nav';
import { MAIN_URL } from '../../../constant';
import { useParams } from 'react-router-dom';

function MainPo() {

    const {id} = useParams(); 
    const [Data,setData] = useState({});
    useEffect(() =>{
        fetch(`${MAIN_URL}/${id}`)
        .then(res => res.json())
        .then((result)=>{
            setData(result.data);
        })
    },[]) 


  return (
    <div className='Main-section'>

            <table>
                <tr>
                    <td style={{ padding: '10px' }}>
                        <img style={{ width: '50%', height: 'auto' }} src="https://www.freshbooks.com/wp-content/uploads/invoice-template-blue-985x1280.png" />
                    </td>
                    <td>
                        <PoNav data={Data}/>
                    </td>
                </tr>
            </table>
        </div>
  )
}

export default MainPo;