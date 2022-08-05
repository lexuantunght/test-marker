import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Marker from './Marker';
import Setup from './Setup';

const App = () => {
    return (
        <div className="app-container responsive">
            <BrowserRouter>
                <Routes>
                    <Route path="/test-marker" element={<Marker />} />
                    <Route path="/test-setup" element={<Setup />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
