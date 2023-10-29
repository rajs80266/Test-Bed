import React, { useState } from 'react';
import VideoGrid from './Dashboard';

import './profile.css';
import { api } from '../convex/_generated/api';
import { useQuery } from 'convex/react';

import vote from '../images/thumbsup.png';
import colab from '../images/Colab.png';


const Profile = () => {
    let media = useQuery(api.media.get);
    let personnel_details = useQuery(api.personnel_details.get);
    let preferences = useQuery(api.preferences.get);

    const [userData, setUserData] = useState({
        media: [],
        personnel_details: {},
        preferences: {}
    })
        console.log(media, personnel_details, preferences);
        const uid = window.location.pathname.slice(9,1000);
        console.log(uid);
    useState(() => {
        let newData = {};
        if (media && personnel_details && preferences) {
            media = media.filter(m => m.uid === uid);
            newData = {...media};
            personnel_details = personnel_details.filter(m => m.uid === uid)[0];
            newData = {...newData, ...personnel_details};
            preferences = preferences.filter(m => m.uid === uid)[0];
            newData = {...newData, ...preferences};
        }
        setUserData({...userData, ...newData})
    }, [media, personnel_details, preferences]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr' }}>
        <div style={{ margin: '20px' }}>
            <div style={{ display: 'flex'}}>
                <div className="user-bigger"
                        style={{width: '500px !important'}}
                >
                    <img
                        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaCjgItBKx782gOjdxAbhDBvr7tSjv5C9_mA&usqp=CAU'}
                        style={{width: '500px !important'}}
                    />
                </div>
                <div>
                    <br/>
                    <center><h2>#32 {personnel_details?.name}</h2></center>
                    <center><h3>Hee Jin Min and 71 others Voting</h3></center>
                    <center><a href="#">{userData.personnel_details?.social}</a> <span className='edit'>It’s just my name, meaning blue cloud</span></center>
                    <center><h3>{userData.personnel_details?.message1}<span className='edit'>Infinite  Be Mine<br/>
                    Its the song that made me wanna be a K-Pop Idol myself!</span></h3></center>
                    <center><h3><span>I can mimic roosters very well</span></h3>
                    <br/>
                    <br/>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                                        <div className="user-image">
                                            <img src={vote} />
                                        </div>
                                        <div className="user-image" >
                                            <img src={colab} />
                                        </div>
                                    </div></center>
                </div>
            </div>
        </div>
        <div>
            <VideoGrid />
        </div>
    </div>
  );
};

export default Profile;
