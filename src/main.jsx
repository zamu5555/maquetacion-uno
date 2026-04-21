import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { routerApp } from './router/routerApp'


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={routerApp} />
  
)