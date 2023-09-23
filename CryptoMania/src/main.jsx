import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
    BrowserRouter
} from "react-router-dom";
import Context from './Global/Context.jsx';
import axios from 'axios';

axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded'
ReactDOM.createRoot(document.getElementById('root')).render (
    <React.StrictMode>
        <BrowserRouter>
            <Context>
                <App/>
            </Context>


        </BrowserRouter>

    </React.StrictMode>,
)
