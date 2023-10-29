import React, { useState } from 'react';

import './dashboard.css';
import FileUpload from '../components/FileUpload';
import { api } from '../convex/_generated/api';
import { useMutation, useQuery } from 'convex/react';

import vote from '../images/thumbsup.png';
import colab from '../images/Colab.png';
import { updateVote } from '../convex/votes';

function getYouTubeThumbnail(videoUrl, quality = 'default') {
    const videoId = videoUrl.match(/[?&]v=([^&]+)/)[1];
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
    return thumbnailUrl;
  }

const VideoGrid = ({addVideo}) => {
    let videos = [];
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [addingVideo, setAddingVideo] = useState(false);

    const media = useQuery(api.media.get);
    const personnel_details = useQuery(api.personnel_details.get);
    const votes = useQuery(api.votes.get);
    const updatevotes = useMutation(api.votes.updateVote);

    if (media) {
        videos = media.filter(p => !p.media_url.includes("https://soundcloud.com")).map(p => {
            console.log(p);
            return {id: p._id, title: '', url: p.media_url, uid: p.uid};
        });
    }

  const image = 'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png';

  const openModal = (video) => {
    setSelectedVideo(video);
  }

  const closeModal = () => {
    setSelectedVideo(null);
  }

  const addMedia = () => {
    setAddingVideo(true);
  }

  const closeMedia = () => {
    setAddingVideo(false);
  }

  const addVote = async (uid) => {
    const user = votes.filter(vote => vote.uid === uid)[0];
    console.log(votes);
    const vote_count = user.vote_count + 2;
    updatevotes({ uid, last_vote:'-', vote_count, id: user._id })
  };

console.log(personnel_details);
  return (
    <div>
        <div className="video-grid">
            {
                addVideo && <div className="video-card" key={'add'} onClick={() => addMedia()}>
                    <img src={"https://cdn-icons-png.flaticon.com/512/262/262038.png"} style={{cursor:'pointer', width: '100px', position: 'relative', left: '70px', top: '50px'}} />
                </div>
            }
        {videos.map(video => (
            <div className="video-card" key={video.id} onClick={() => openModal(video)}>
            <img src={getYouTubeThumbnail(video.url)} alt={video.title} />
            </div>
        ))}
        {addingVideo && (
            <div className="modal-overlay">
                <div className="video-modal">
                    <button className="close-button" onClick={closeMedia}>Close</button>
                    <FileUpload />
                </div>
            </div>
        )}
        {selectedVideo && (
            <div className="modal-overlay">
            <div className="video-modal">
                <button className="close-button" onClick={closeModal}>Close</button>
                <iframe
                    title={selectedVideo.title}
                    width="100%"
                    height="400"
                    src={selectedVideo.url.replace("watch?v=", "embed/")}
                    frameBorder="0"
                    allowFullScreen
                />
                <div className="user-images">
                <div className="image-list">
                    {
                        personnel_details.filter(user => user.uid === selectedVideo.uid).map(user => {
                            return (
                                <>
                                    <div
                                        className='user-profile-navigator'
                                        onClick={() => {window.location = 'http://localhost:3000/profile/' + user.uid}}
                                    >
                                        <div className="user-image">
                                            <img src={user.display_profile} />
                                        </div>
                                        <h2 style={{width: '300%', position: 'relative', top: '15px'}}>{user.name}</h2>
                                    </div>
                                    <div style={{width: '3500px'}}>
                                        <div className="user-image" style={{float: 'right'}}>
                                            <img src={vote} onClick={() => addVote(user.uid)}/>
                                        </div>
                                        <div className="user-image" style={{float: 'right'}}>
                                            <img src={colab} />
                                        </div>
                                    </div>
                                </>
                            );
                        })
                    }
                </div>
                </div>
            </div>
            </div>
        )}
        </div>
    </div>
  );
};

export default VideoGrid;
