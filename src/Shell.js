import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './shell.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import Suggestor from './pages/suggestor';
import UserRanking from './components/UserRanking';

const Shell = (props) => {
    const { children } = props;
    const [component, setComponent] = useState();

    const closeModal = () => {
        setComponent();
    }

    return (
        <div className='shell'>
            <div className="shell-header">
                <Header/>
            </div>
            <div className="shell-navigator">
                <div className='additional-features'>
                    <button onClick={() => {setComponent(<Suggestor />);}}>Suggest Artist / Producer</button>
                    <button onClick={() => {setComponent(<UserRanking />);}}>Producer Rankings</button>
                    <button>Application</button>
                </div>
            </div>
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
};

const mapStateToProps = (state) => {
    return state;
};

export default connect(
    mapStateToProps,
)(Shell);