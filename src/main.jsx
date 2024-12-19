import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css'
import { GifExpertApp } from './GifExpertApp.jsx';


ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GifExpertApp />
    </React.StrictMode>
);