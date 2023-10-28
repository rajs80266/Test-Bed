import React, { useState } from 'react';

import './dashboard.css';
import FileUpload from '../components/FileUpload';

const VideoGrid = ({addVideo}) => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [addingVideo, setAddingVideo] = useState(false);

  const videos = [
    { id: 1, title: 'Video 1', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { id: 2, title: 'Video 2', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { id: 3, title: 'Video 3', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { id: 4, title: 'Video 4', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { id: 5, title: 'Video 5', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { id: 6, title: 'Video 6', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
  ];

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

  return (
    <div>
        <div className="video-grid">
            {
                addVideo && <div className="video-card" key={'add'} onClick={() => addMedia()}>
                    <img src="https://cdn-icons-png.flaticon.com/512/262/262038.png" style={{cursor:'pointer', width: '100px', position: 'relative', left: '70px', top: '50px'}} />
                </div>
            }
        {videos.map(video => (
            <div className="video-card" key={video.id} onClick={() => openModal(video)}>
            <img src={`https://img.youtube.com/vi/${video.url.split('=')[1]}/default.jpg`} alt={video.title} />
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
                    src={selectedVideo.url}
                    frameBorder="0"
                    allowFullScreen
                />
                <div className="user-images">
                <div className="image-list">
                    <div className="user-image">
                        <img src={image} />
                    </div>
                    <h2 style={{width: '100%'}}>Artist Name</h2>
                    <div style={{width: '3500px'}}>
                        <div className="user-image" style={{float: 'right'}}>
                            <img src={image} />
                        </div>
                        <div className="user-image" style={{float: 'right'}}>
                            <img src={image} />
                        </div>
                    </div>
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
