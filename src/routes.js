
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import ErrorNotification from './client/components/error';
import Demo from './client/components/new_report_form';

function RRoutes() {

    return (
        <BrowserRouter>
<<<<<<< HEAD
            <Routes>
                <Route index element={<Menu />} />
                <Route path="/newreport" element={<Demo />} />
            </Routes>
=======
         <Routes>
         <Route  index element={<App/>} />
         <Route path="/newreport" element={<Demo/>} />
         <Route path='/error' element={<ErrorNotification/>} />
         </Routes>
>>>>>>> 5f02fc4015c2ddeaeef509a6fc182dd8154bda94
        </BrowserRouter>
    )


}

export default RRoutes;