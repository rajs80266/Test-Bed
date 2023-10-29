import React, { useRef, useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

import no_user from '../../images/no_user.png';
import './userprofile.css';

const convexSiteUrl = "https://aware-grouse-298.convex.site";

const UserProfile = ({ formData, setFormData }) => {
  const generateUploadUrl = useMutation(api.display_profile.generateUploadUrl);
  const sendImage = useMutation(api.display_profile.sendImage);

  // State variables
  const [selectedImage, setSelectedImage] = useState(null);
  const [displayProfile, setDisplayProfile] = useState(false);

  // const [social, setSocial] = useState('');
  // const [instruction, setInstruction] = useState('');
  // const [message1, setMessage1] = useState('');
  // const [message2, setMessage2] = useState('');
  // const [message3, setMessage3] = useState('');

  // const [image, setImage] = useState('');

  // Ref for file input
  const imageInput = useRef(null);

  // Handle image click (trigger file input click)
  const handleImageClick = () => {
    if (selectedImage) {
      setDisplayProfile(false);
    } else {
      imageInput.current.click();
    }
  };

  // Handle image upload
  const handleImageUpload = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        setSelectedImage(file);
        setDisplayProfile(false);

        const postUrl = await generateUploadUrl();

        const result = await fetch(postUrl, {
          method: "POST",
          headers: { "Content-Type": file.type },
          body: file,
        });
        const { storageId } = await result.json();

        await sendImage({ storageId, author: formData.name });
        setDisplayProfile(true);
        const getImageUrl = new URL(`${convexSiteUrl}/getImage`);
        getImageUrl.searchParams.set("storageId", storageId);
        setFormData({...formData, image: getImageUrl.href});
      };
      reader.readAsDataURL(file);
    }
  };

  const selectedVideo = formData.youtube;

  return (
    <div style={{ display: 'flex' }}>
      <div>
        <input
          type="file"
          accept="image/*"
          id="fileInput"
          style={{ display: 'none' }}
          ref={imageInput}
          onChange={handleImageUpload}
        />
        <img
          src={!displayProfile ? no_user : formData.image}
          alt="Profile"
          className="display-profile"
          onClick={handleImageClick}
        />
        <div className="form-group">
          <input
            type="text"
            id="social"
            name="social"
            value={formData.social}
            onChange={(e) => setFormData({...formData, social: e.target.value})}
            required
            placeholder='Social Media URL'
          />
        </div>
      </div>
            <div style={{width: '500px', alignContent: 'center', margin: '0 20px'}}>
                <u><h2>{formData.name}</h2></u>
                {' #' + formData.questions.map(question => question.selected.join(' #')).join(' #')}
                <br/>
                <br/>
                <div className="form-group">
                    <input
                        type="text"
                        id="instruction"
                        name="instruction"
                        value={formData.instruction}
                        onChange={(e) => {
                          setFormData({...formData, instruction: e.target.value})
                        }}
                        required
                        placeholder='Description'
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        id="message1"
                        name="message1"
                        value={formData.message1}
                        onChange={(e) => {setFormData({...formData, message1: e.target.value})}}
                        required
                        placeholder='My Name means...'
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        id="message2"
                        name="message2"
                        value={formData.message2}
                        onChange={(e) => {setFormData({...formData, message2: e.target.value})}}
                        required
                        placeholder='My fav K-Pop song for all times...'
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        id="message3"
                        name="message3"
                        value={formData.message3}
                        onChange={(e) => {setFormData({...formData, message3: e.target.value})}}
                        required
                        placeholder='My hidden talent...'
                    />
                </div>
            </div>
            <div style={{width: '500px'}}>
                <iframe
                    width="100%"
                    height="300"
                    src={selectedVideo}
                    frameBorder="0"
                    allowFullScreen
                />
            </div>
        </div>
    );
};

export default UserProfile;