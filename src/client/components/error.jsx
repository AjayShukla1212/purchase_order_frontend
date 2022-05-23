import React from 'react';

import { useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';





const ErrorNotification = (props) => {



 const error = useSelector(state => state.error);
 const navigate=useNavigate();
 function handleClose(){

  navigate('/');

 }
return (

 <>

 {error && (

 <div className="fancy-error-class">

 <button onClick={handleClose}>Close Error</button>

 <span>{error}</span>

 </div>

 )}

 </>

 )

}


export default ErrorNotification;