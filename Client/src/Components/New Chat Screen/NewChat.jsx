import React, { useState } from 'react';
import { capibilitiesCardsData, exampleCardsData, limitationsCardsData } from '../../Data/data';
// import InputSection from '../Input Section/InputSection';
import './NewChat.css';


const NewChat = () => {
  return (
    <>
      <section className='new-chat-container123'>
        <div className='new-chat-items-container'>
          <h1>ChatGPT Clone</h1>
          <div className='example-cards'>
            <div className='card1'>
              <div>
                <i className="fas fa-sun"></i>
                <span>Examples</span>
              </div>
              { exampleCardsData.map( ( elem ) => {
                return <div className='text-cards'>
                  <p>"{ elem }"</p>
                </div>;
              } ) }
            </div>
            <div className='card1'>
              <div>
                <i className="fas fa-bolt fa-thin"></i>
                <span>Capabilities</span>
              </div>
              { capibilitiesCardsData.map( ( elem ) => {
                return <div className='text-cards-no-hover'>
                  <p>{ elem }</p>
                </div>;
              } ) }
            </div>
            <div className='card1'>
              <div>
                <i className="fas fa-triangle-exclamation"></i>
                <span>Limitations</span>
              </div>
              { limitationsCardsData.map( ( elem ) => {
                return <div className='text-cards-no-hover'>
                  <p>{ elem }</p>
                </div>;
              } ) }
            </div>
          </div>
        </div>
        {/* <div className='input-area-container'>
          <InputSection />
        </div> */}
      </section>
    </>
  );
};

export default NewChat;
