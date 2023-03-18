import React, { useState, useEffect } from 'react';
import './TypingEffect.css';
import { marked } from 'marked';

const TypingEffect = ( { text } ) => {
  const [ index, setIndex ] = useState( 0 );
  const [ displayHtml, setDisplayHtml ] = useState( '' );
  const [ showCursor, setShowCursor ] = useState( true );

  useEffect( () => {
    const html = marked( text );
    const timerId = setTimeout( () => {
      setDisplayHtml( html.slice( 0, index ) );
      setIndex( index + 1 );
    }, 20 );
    if ( index >= html.length ) {
      window.scrollTo( {
        top: document.body.scrollHeight,
        behavior: 'smooth'
      } );
      setShowCursor( false );
      clearTimeout( timerId );
    }
    return () => clearTimeout( timerId );
  }, [ index, text ] );

  return (
    <>
      <span className='html_container' dangerouslySetInnerHTML={ { __html: displayHtml } } />
      { showCursor ? <span className="cursor"></span> : null }
    </>
  );
};

export default TypingEffect;
