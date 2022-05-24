
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Navbar from './client/components/Navbar';
import Demo from './client/components/new_report';
import Menu from './client/components/Menu';
function RRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Menu />} />
                <Route path="newreport" element={<Demo />} />
            </Routes>
        </BrowserRouter>
    )


}

export default RRoutes