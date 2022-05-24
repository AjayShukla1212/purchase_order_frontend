import React from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const ErrorNotification = (props) => {
    console.log("error component")
    let navigate = useNavigate();
    const error = useSelector(state => state.error);
    return (
        <>
            <h1>{error}</h1>
            <button onClick={() => { navigate('/') }}>Clear error</button>

        </>
    )
}
export default ErrorNotification;