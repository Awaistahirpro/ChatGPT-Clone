import React, { createContext, useState } from 'react';
import InputSection from '../Input Section/InputSection';
import './PrevChat.css';
import '../New Chat Screen/NewChat.css';
import PreLoader from '../Pre Loader/PreLoader';
import TypingEffect from '../Typing Effect/TypingEffect';
import NewChat from '../New Chat Screen/NewChat';

export const MyContext = createContext();

const PrevChat = () => {

  const [ allChatHistory, setAllChatHistory ] = useState( [] );
  const [ stateForLoader, setstateForLoader ] = useState( null );

  function updateMyData ( newData ) {
    let question = newData.questionData;
    let answer = newData.answerData;
    let dataObj = { questionData: question, answerData: answer };
    if ( answer === '' && question !== '' ) {
      setstateForLoader( '' );
      setAllChatHistory( ( prevChatHistory ) => [ ...prevChatHistory, newData ] );
    } else if ( question && answer !== '' ) {
      setAllChatHistory( ( prevChatHistory ) => {
        let newArray = prevChatHistory.map( ( elem, index ) => {
          if ( ( prevChatHistory.length - 1 === index && prevChatHistory.length !== 0 ) || prevChatHistory.length === 0 ) {
            return dataObj;
          } else {
            return elem;
          }
        } );
        return newArray;
      } );
      setstateForLoader( null );
    }
  }
  return (
    <>
      <section className='prev-chat-contain'>
        {(allChatHistory.length > 0) ?

           allChatHistory.map( ( elem, index ) => {
          return <div className='question-and-answer-container'>
            <div className='question-container'>
              <div className='question-items'>
                <img src='/profile-icon.jpg' alt='user-avatar' />
                <p>{ elem.questionData }</p>
              </div>
            </div>
            <div className='answer-container'>
              <div className='answer-items'>
                <img className='chatbot-avatar' src='/ChatGPT-Logo-Vector.jpg' alt='ChatGPT Bot' />
                <div className='response-container'>
                  { ( stateForLoader === '' && allChatHistory.length - 1 === index ) ? <PreLoader /> : <TypingEffect text={ elem.answerData } /> }
                </div>
              </div>
            </div>
          </div>;
        } )
        :
        <NewChat /> }
        <div className='input-area-container'>
          <MyContext.Provider value={ { allChatHistory, updateMyData } }>
            <InputSection />
          </MyContext.Provider>
        </div>
      </section>
    </>
  );
};

export default PrevChat;
