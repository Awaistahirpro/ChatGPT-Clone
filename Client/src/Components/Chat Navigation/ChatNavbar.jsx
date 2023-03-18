import React from 'react';
import './ChatNavbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { questionsData, profileOptionsData } from '../../Data/data';
import { Link, Outlet } from 'react-router-dom';


const ChatNavbar = () => {

    return (
        <>
            <div className="main-container">
                <section className='side-nav'>
                    <div className='new-chat-container'>
                        <Link to='/chat/new-chat'>
                            <div className='new-chat-button'>
                                <i className='fas fa-plus'></i>
                                <span>New chat</span>
                            </div>
                        </Link>
                    </div>
                    <div className='questions-list-container'>
                        { questionsData.map( ( elem ) => {
                            return <div className='questions-list'>
                                <i className='fas fa-comment-alt'></i>
                                <span>{ elem.question_title }</span>
                            </div>;
                        } ) }
                    </div>
                    <div className='profile-options-container'>
                        { profileOptionsData.map( ( elem ) => {
                            return <div className='questions-list'>
                                <i className={ `fas ${ elem.option_icon }` }></i>
                                <span>{ elem.option_title }</span>
                            </div>;
                        } ) }
                    </div>
                </section>
            </div>
        </>
    );
};

export default ChatNavbar;
