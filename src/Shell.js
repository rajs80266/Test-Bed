import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './shell.css';
import { useState } from 'react';
import Suggestor from './pages/suggestor';
import UserRanking from './components/UserRanking';

const Shell = (props) => {
    const { children, user  } = props;
    const [component, setComponent] = useState();

    const closeModal = () => {
        setComponent();
    }
    const {setOpen, setNewUser} = props;

    return (
        <div className='shell'>
            {!['/', '/login', '/signup'].includes(window.location.pathname) && 
                <div className="shell-navigator">
                    <div className='additional-features'>
                        <button onClick={() => {window.location ='http://localhost:3000/dashboard'}}>Dashboard</button>
                        <button onClick={() => {setComponent(<Suggestor />);}}>Suggest Artist / Producer</button>
                        <button onClick={() => {setComponent(<UserRanking />);}}>Producer Rankings</button>
                        <button>Application</button>
                    </div>
                </div>
            }
            <div className="shell-content">
                {children}
            </div>
            
            <div className="video-grid">
                    {component && (
                        <div className="modal-overlay">
                            <div className="video-modal">
                                <button className="close-button" onClick={closeModal}>Close</button>
                                {component}
                            </div>
                        </div>
                    )}
                </div>
        </div>
    );
};

Shell.propTypes = {
    children: PropTypes.node.isRequired,
    setNewUser: PropTypes.func.isRequired,
    setUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return state;
};

export default connect(
  mapStateToProps,
)(Shell);