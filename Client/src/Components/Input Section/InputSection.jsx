import React, { useContext, useState } from 'react';
import { sendingMessageToServer } from '../../API/api';
import PreLoader from '../Pre Loader/PreLoader';
import { MyContext } from '../Prev Chat Screen/PrevChat';
import './InputSection.css';


const InputSection = () => {

    const [ question, setQuestion ] = useState( '' );
    const [ handleLoader, sethandleLoader ] = useState( null );
    const [ dataObjComplete, setdataObjComplete ] = useState( [] );

    const { allChatHistory, updateMyData } = useContext( MyContext );

    const generateUniqueId = () => {
        const chars = '0123456789abcdefghijklmnopqrstuvwxyz';
        let id = '';

        for ( let i = 0; i < 10; i++ ) {
            const randomIndex = Math.floor( Math.random() * chars.length );
            id += chars[ randomIndex ];
        }

        return id;
    };


    const getResponseFromChatGPT = async () => {
        if ( question !== '' ) {
            sethandleLoader( '' );
            let dataObj1 = { questionData: question, answerData: '' };
            updateMyData( dataObj1 );
            const res = await sendingMessageToServer( question );
            let dataObj2 = { id: generateUniqueId(), questionData: question, answerData: res.botResponse };
            updateMyData( dataObj2 );
            sethandleLoader( null );
        }
        else {
            alert( 'Question should not be empty.' );
        }
    };

    const handleKeyDown = ( event ) => {
        if ( event.key === "Enter" ) {
            if ( event.shiftKey ) {
                const textarea = event.target;
                const currentPosition = textarea.selectionStart;
                const value = textarea.value;
                const nextLinePosition = value.indexOf( '\n', currentPosition ) + 1;
                if ( nextLinePosition ) {
                    textarea.setSelectionRange( nextLinePosition, nextLinePosition );
                    event.preventDefault();
                }
            } else if ( event.keyCode !== 229 ) {
                getResponseFromChatGPT();
                setQuestion( '' );
                event.preventDefault();
            }
        }
    };


    return (
        <>
            <textarea placeholder='Ask any question' value={ question } onKeyDown={ ( e ) => handleKeyDown( e ) } onChange={ ( e ) => setQuestion( e.target.value ) }></textarea>
            <div className='btns-container'>
                <div onClick={ getResponseFromChatGPT } className='send-btn'>
                    { ( handleLoader === '' ) ? <PreLoader /> : <i className="fa-regular fa-paper-plane"></i> }
                </div>
            </div>
        </>
    );
};

export default InputSection;
