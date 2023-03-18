import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { profileOptionsData, questionsData } from '../../Data/data';
import { Link } from 'react-router-dom';
import './TopNav.css';

const TopNav = () => {

    const [ show, setShow ] = useState( false );

    const handleClose = () => setShow( false );
    const handleShow = () => setShow( true );

    return (
        <>
            <div className='responsive-nav-container'>
                <i onClick={ handleShow } className="fas fa-bars"></i>
                <p>This is dummy questionThis is dummy questionThis is dummy questionThis is dummy questionThis is dummy questionThis is dummy questionThis is dummy question</p>
                <i className="fas fa-plus"></i>
            </div>

            <Offcanvas style={{background: '#191B1C'}} className="side-container" show={ show } onHide={ handleClose }>
                <Offcanvas.Header closeButton>
                    {/* <Offcanvas.Title>Profile</Offcanvas.Title> */}
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <section className='side-nav-for-mob'>
                        <div className='new-chat-btn-container'>
                            <div className='new-chat-button'>
                                <i className='fas fa-plus'></i>
                                <span>New chat</span>
                            </div>
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
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default TopNav;
