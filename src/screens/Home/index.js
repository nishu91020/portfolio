import React from 'react';
import './styles.css';
import HomeHeader from '../../components/HomeHeader';
import HomeContent from '../../components/HomeContent';

const Home = () => {
    return (
        <div className="container">
            <HomeHeader />
            <HomeContent />
        </div>
    );
};

export default Home;
