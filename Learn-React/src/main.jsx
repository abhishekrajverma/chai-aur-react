import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SignUp from './pages/SignUp.jsx'
import './index.css'
import BgChanger from './pages/BgChanger.jsx'
import UseEffect from './hooks/UseEffect.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <UseEffect />
    </React.StrictMode>
)
