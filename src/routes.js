
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import ErrorNotification from './client/components/error';
import Demo from './client/components/new_report_form';
import Update from './client/components/Update';

import Upload_page from './client/components/main_form';
import ShowDetails from './client/view_details';
import MiniDesc from './client/components/after_view_details';
import ViewPo from './client/components/ViewPoNumber';
function RRoutes() {

    return (
        <BrowserRouter>
         <Routes>
         <Route  index element={<App/>} />
         <Route path='/update/:id' element= {<Update/>}/>
                <Route path="/newreport" element={<Demo />} />
                <Route path='/error' element={<ErrorNotification />} />
                <Route path='/upload' element={<Upload_page />} />
                <Route path='/getdetails' element={<ShowDetails />} />
                <Route path='/view/:id' element={<ViewPo />} />
            </Routes>
        </BrowserRouter>
    )


}

export default RRoutes;