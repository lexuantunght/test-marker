import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
    IoCheckmarkCircleOutline,
    IoCheckmarkCircle,
    IoConstruct,
    IoConstructOutline,
    IoTime,
    IoTimeOutline,
} from 'react-icons/io5';
import Home from '../Home';
import Marker from '../Marker';
import Setup from '../Setup';
import Sidebar from './components/Sidebar';
import useController from '@controller/useController';
import SetupController from '@controller/setup/SetupController';

const menuItems = [
    {
        name: 'home',
        path: '/',
        title: 'Home',
        icon: <IoCheckmarkCircle size={30} />,
        outlineIcon: <IoCheckmarkCircleOutline size={30} />,
    },
    {
        name: 'setup',
        path: '/test-setup',
        title: 'Test setup',
        icon: <IoConstruct size={26} />,
        outlineIcon: <IoConstructOutline size={26} />,
    },
    {
        name: 'history',
        path: '/history',
        title: 'History',
        icon: <IoTime size={30} />,
        outlineIcon: <IoTimeOutline size={30} />,
    },
];

const App = () => {
    const { getAllTestStructures } = useController(SetupController);

    React.useEffect(() => {
        getAllTestStructures();
    }, []);

    return (
        <div className="app-container">
            <BrowserRouter>
                <Sidebar items={menuItems} />
                <div className="app-main">
                    <Routes>
                        <Route path="/test-marker" element={<Marker />} />
                        <Route path="/test-setup" element={<Setup />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
