import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';


function AppRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<h4>404 not found</h4>} />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }
