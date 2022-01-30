import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from '../src/components/navigation/Navbar';
import Routes from './routes/Routes';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />

                <div className="page">
                    <Routes />
                </div>        
            </BrowserRouter>
        </div>
    );
}

export default App;
