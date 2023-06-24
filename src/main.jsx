import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { myRouter } from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={myRouter}>
    <App />
  </RouterProvider>
)
