import React from 'react';
import {BrowserRouter ,Route,Routes} from 'react-router-dom';
import App from './App';
import ErrorNotification from './client/components/error';

const RRoutes=()=>{

    return(
        <BrowserRouter>
         <Routes>
         <Route  path='/' element={<App/>} />
         <Route path='/error' element={<ErrorNotification/>} />
        </Routes>
        </BrowserRouter>
       )


}

export default RRoutes