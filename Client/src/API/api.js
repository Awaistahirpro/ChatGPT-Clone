import axios from 'axios';

export const baseUrl = '';

export const sendingMessageToServer = async ( message ) => {
    const res = await axios.post( `${ baseUrl }/user_input_question`, {
        prompt: message
    } );
    return res.data;
};
