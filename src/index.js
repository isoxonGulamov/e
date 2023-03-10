import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';
import "./index.css"
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

 <BrowserRouter>

 <ProSidebarProvider>
 <App />
 </ProSidebarProvider>



 </BrowserRouter>
);
