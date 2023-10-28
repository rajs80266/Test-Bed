import React, { useState } from 'react';
import './signup.css';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    step: 1,
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    random_options: [],
    questions: [
      {
        id: 1,
        question: 'I\'m here to be a...',
        options: ['K-Pop Performer', 'K-Pop Music Producer', 'Just exploring...'],
        selected: []
      },
      {
        id: 2,
        question: 'What concepts/vibes do you want your song to be in? (Select up to 3)',
        options: ['Y2K', 'Baddie', 'Schoolboy/girl', 'cute', 'fantasy', 'Vivid', 'Supernatural', 'Playful', 'Fairy', 'Dark', 'Pastel', 'Teen', 'Sporty', 'Mature', 'Summer'],
        selected: []
      },
      { id: 3,
        question: 'What genre of music do you want your song to be in? (Select up to 3)',
        options: [ 'Pop', 'RnB', 'HipHop', 'Electronic', 'Funk', 'Rock', 'Reggae', 'Disco', 'Synth Pop', 'Indie', 'Soul', 'New-age'],
        selected: []
      },
      { id: 4, question: 'Which K-Pop band do you see yourself in the most? (Select one)',
        options: ['Blackpink',  'APink', 'LOONA', 'MAMAMOO', 'Red Velvet', 'TWICE', 'Dreamcatcher', '(G)I-DLE',
        'OH MY GIRL', 'ITZY', 'STAYC', 'aespa', 'WJSN', 'IVE', 'NMIXX', 'NewJeans', '2NE1', 'AOA', 'T-ARA', 'LE SSERAFIM', 'GFRIEND',
        'PRISTIN', 'IZ*ONE',
        'SUPER JUNIOR', 'BTS', 'Stray Kids', 'BIGBANG', 'SHINee', '2PM', 'HIGHLIGHT', 'Block B', 'EXO', 'BTOB', 'GOT7', 'WINNER',
        'SEVENTEEN', 'iKON', 'NCT DREAM', 'NCT 127', 'ASTRO', 'SF9', 'THE BOYZ', 'ATEEZ', 'TXT', 'ENHYPEN'
      ], //23
        selected: []
      }
    ]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleQuestionSelect = (questionId, selectedOptions) => {
    const updatedQuestions = formData.questions.map(question => {
      if (question.id === questionId) {
        return { ...question, selected: selectedOptions };
      }
      return question;
    });

    setFormData({
      ...formData,
      questions: updatedQuestions
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (formData.step == 2) {
      if (formData.questions[0].selected == 'Just exploring...') {
        setFormData({
          ...formData,
          step: 6
        });
        return;
      }
    }
    setFormData({
      ...formData,
      step: formData.step + 1
    });
  };

  const getRandomStrings = (strings, num) => {
    const selectedStrings = [];
    const numStrings = strings.length;
    
    if (num > numStrings) {
      console.error('Number of requested strings exceeds the list length.');
      return null;
    }
    
    while (selectedStrings.length < num) {
      const randomIndex = Math.floor(Math.random() * numStrings);
      const randomString = strings[randomIndex];
      
      if (!selectedStrings.includes(randomString)) {
        selectedStrings.push(randomString);
      }
    }
    
    return selectedStrings;
  };

  const handlePrev = (e) => {
    e.preventDefault();
    if (formData.step == 6) {
      if (formData.questions[0].selected == 'Just exploring...') {
        setFormData({
          ...formData,
          step: 2
        });
        return;
      }
    }
    setFormData({
      ...formData,
      step: formData.step - 1
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const renderStep = () => {
    let currentQuestion = '';
    switch (formData.step) {
      case 1:
        return (
          <div>
            <form onSubmit={handleNext}>
            <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>              
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="confirmPassword"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit">Next</button>
            </form>
          </div>
          
        );
        case 2:
        currentQuestion = formData.questions[formData.step - 2];
        return (
          <div>
            <form onSubmit={handleNext}>
              <h3>{currentQuestion.question}</h3>
              <div className='options'>
                {currentQuestion.options.map((option, index) => (
                  <div key={index}>
                    <div key={index} className="option-button">
                        <input
                            type="checkbox"
                            id={`option-${index}`}
                            name={`option-${index}`}
                            checked={currentQuestion.selected.includes(option)}
                            onChange={(e) => {
                            const selectedOptions = [...currentQuestion.selected];
                            if (e.target.checked) {
                                selectedOptions.push(option);
                            } else {
                                const index = selectedOptions.indexOf(option);
                                if (index !== -1) {
                                selectedOptions.splice(index, 1);
                                }
                            }
                            handleQuestionSelect(currentQuestion.id, selectedOptions);
                            }}
                        />
                        <label htmlFor={`option-${index}`}>{option}</label>
                    </div>
                  </div>
                ))}
              </div>
              <button type="submit" disabled={currentQuestion.selected.length != 1} onClick={handleNext}>Next</button>
              <button type="button" onClick={handlePrev}>Previous</button>
            </form>
          </div>
        );
        case 3:
        case 4:
        currentQuestion = formData.questions[formData.step - 2];
        return (
          <div>
            <form onSubmit={handleNext}>
              <h3>{currentQuestion.question}</h3>
              <div className='options'>
                {currentQuestion.options.map((option, index) => (
                  <div key={index}>
                    <div key={index} className="option-button">
                        <input
                            type="checkbox"
                            id={`option-${index}`}
                            name={`option-${index}`}
                            checked={currentQuestion.selected.includes(option)}
                            onChange={(e) => {
                            const selectedOptions = [...currentQuestion.selected];
                            if (e.target.checked) {
                                selectedOptions.push(option);
                            } else {
                                const index = selectedOptions.indexOf(option);
                                if (index !== -1) {
                                selectedOptions.splice(index, 1);
                                }
                            }
                            handleQuestionSelect(currentQuestion.id, selectedOptions);
                            }}
                        />
                        <label htmlFor={`option-${index}`}>{option}</label>
                    </div>
                  </div>
                ))}
              </div>
              <button type="submit" disabled={currentQuestion.selected.length == 0 || currentQuestion.selected.length > 3} onClick={handleNext}>Next</button>
              <button type="button" onClick={handlePrev}>Previous</button>
            </form>
          </div>
        );
        case 5:
        currentQuestion = formData.questions[formData.step - 2];
        if (formData.random_options.length == 0) {
          formData.random_options = [...getRandomStrings(currentQuestion.options.slice(0, 23), 2), ...getRandomStrings(currentQuestion.options.slice(23, 45), 2)];
          setFormData({
            ...formData
          });
        }
        return (
          <div>
            <form onSubmit={handleNext}>
              <h3>{currentQuestion.question}</h3>
              <div className='options'>
                {formData.random_options.map((option, index) => (
                  <div key={index}>
                    <div key={index} className="option-button">
                        <input
                            type="checkbox"
                            id={`option-${index}`}
                            name={`option-${index}`}
                            checked={currentQuestion.selected.includes(option)}
                            onChange={(e) => {
                            const selectedOptions = [...currentQuestion.selected];
                            if (e.target.checked) {
                                selectedOptions.push(option);
                            } else {
                                const index = selectedOptions.indexOf(option);
                                if (index !== -1) {
                                selectedOptions.splice(index, 1);
                                }
                            }
                            handleQuestionSelect(currentQuestion.id, selectedOptions);
                            }}
                        />
                        <label htmlFor={`option-${index}`}>{option}</label>
                    </div>
                  </div>
                ))}
              </div>
              <div onClick={() => {
                formData.random_options = [...getRandomStrings(currentQuestion.options.slice(0, 23), 2), ...getRandomStrings(currentQuestion.options.slice(23, 45), 2)];
                formData.questions[formData.step - 2].selected = [];
                setFormData({
                  ...formData
                });
              }}><center>Regenerate <span style={{fontSize: 'xx-large'}}>🎲</span></center></div>
              <button type="submit" disabled={currentQuestion.selected.length != 1} onClick={handleNext}>Next</button>
              <button type="button" onClick={handlePrev}>Previous</button>
            </form>
          </div>
        );
        case 6:
        return (
          <div>
            <form onSubmit={handleSubmit}>
              <button type="submit">Register</button>
              <button type="button" onClick={handlePrev}>Previous</button>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
        <div className="login-container">
          <h2>Signup</h2>
          {renderStep()}
        </div>
    </div>
  );
};

export default SignupPage;