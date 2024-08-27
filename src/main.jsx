import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import PdfComp from './components/NewsInformation'; // Ensure correct path
import './index.css';
const Main = () => (
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/information" element={<PdfComp />} />
        </Routes>
    </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>
);
