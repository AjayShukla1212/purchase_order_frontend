import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import Menu from './client/components/Menu';
import Navbar from './client/components/Navbar';
import { actionCreators } from '../src/redux/index';



//import Demo from './client/components/new_report';

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
 <Navbar />
 <Menu />
      <form>
      <label>Gen error</label>
      <button type="submit" onClick={genErr}>Submit</button>
    </form>
    </div>
  );
}

export default App;
