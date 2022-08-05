import React from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="home-container">
            <Button
                icon="pi pi-pencil"
                label="Start test"
                onClick={() => navigate('/test-setup')}
            />
            <Button icon="pi pi-history" label="History" />
            <Button icon="pi pi-cog" label="Configuration" />
        </div>
    );
};

export default Home;
