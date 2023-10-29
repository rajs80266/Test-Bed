import React from "react";
import Login from "./login";
import SignupPage from "./signup";
import VideoGrid from "./Dashboard";
import Suggestor from "./suggestor";
import Profile from "./Profile";

import star1 from '../images/star1.png';
import star2 from '../images/star2.png';
import hi from '../images/hi.png';

import './home.css';

const HomePage = () => {
    return (
        <div>
            <div style={{fontSize: '40px', position: 'relative', left: '120px', top: '30px', fontFamily: 'Arial'}}>
                <h3>Ever dreamed about being a K-Pop Idol? </h3>
                <div>No need to fly to South Korea.</div>
                <h3>Be a <u style={{fontSize: '70px'}}>Self-Made K-Pop Star</u> wherever you are😎</h3>
                <br/>
                <br/>
                <div>
                    <button
                        onClick={() => {window.location = 'http://localhost:3000/login'}}
                        style={{color: 'black' , backgroundColor:'rgb(197 143 255 / 67%)', fontSize: '40px', float: 'right', position: 'relative', bottom: '50px', right: '300px', padding: '30px', borderRadius: '10px'}}>
                        <b>It's MY Turn!</b>
                    </button>
                    <h3 style={{fontSize: '25px'}}>*K-Pop Producers & Fans are welcome here too👋</h3>
                </div>
            </div>
            <img src={star1} className="star1"/>
            <img src={star2} className="star2"/>
            <img src={hi} className="hi" />
        </div>
        // <Login />
        // <SignupPage />
        // <VideoGrid />
        // <Profile />
    );
};

export default HomePage;