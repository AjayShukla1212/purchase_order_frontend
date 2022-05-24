import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import ErrorNotification from './client/components/error';
import { Button, Modal } from 'antd';
import Navbar from './client/components/Navbar';
import { actionCreators } from '../src/redux/index';



function App() {
 const dispatch = useDispatch();

const {setError}=bindActionCreators(actionCreators,dispatch);
const error = useSelector(state => state.error);
console.log(error);
let navigate = useNavigate();
const genErr=()=>{
  setError("this is genarated error")
  return navigate('/error')
}
  return (
    <div className="App">
    
    <h1>Front page</h1>
    
    {/* <ErrorNotification /> */}
    <form>
      <label>Gen error</label>
      <button type="submit" onClick={genErr}>Submit</button>
    </form>
    {/* <Navbar/> */}
    
    </div>
  );
}

export default App;
