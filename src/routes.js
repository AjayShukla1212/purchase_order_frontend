
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import ErrorNotification from './client/components/error';
import Demo from './client/components/new_report_form';
import Upload_page from './client/components/main_form';
import ShowDetails from './client/view_details';
import MiniDesc from './client/components/after_view_details';
function RRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<App />} />
                <Route path="/newreport" element={<Demo />} />
                <Route path='/error' element={<ErrorNotification />} />
                <Route path='/upload' element={<Upload_page />} />
                <Route path='/getdetails' element={<ShowDetails />} />
                {/* <Route path='/details' element={<MiniDesc />} /> */}
            </Routes>
        </BrowserRouter>
    )


}

export default RRoutes