import React from 'react';
import './HomePage.css';
import coverImg from '../../assets/coverimg.png';
import AuthModal from '../AuthModal';

const HomePage = () => {
    return (
        <div className='homepage'>
            <div className='homepage__cover'>
                <div className='cover__desc'>
                    <p><span>DocLiv</span> is an online portal where doctors can advertise their clinics to connect with patients and allow online booking of appointments</p>
                </div>
                <div className='cover__img'>
                    <img src={coverImg} alt="" />
                </div>
            </div>
            <div className='about'>
                <p>Here patients would be able to search for doctors based on their specialty and aggregate rating from other patients</p>
                <div className='about__use'>
                    <p>To use the application just</p><AuthModal text_color="white" />
                </div>
            </div>
        </div>
    )
}

export default HomePage;