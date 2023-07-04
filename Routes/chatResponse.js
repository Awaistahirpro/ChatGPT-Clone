import express from 'express';
const router = express();
import { Configuration, OpenAIApi } from 'openai';
//ACCESSING .env file
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: `${__dirname}/../.env` });

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

router.post('/user_input_question', async (req, res) => {
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: 'user', content: req.body.prompt + '\n and style the response as much as possible.'}]
      });
      if(response){
          res.status(200).send({
              botResponse: response.data.choices[0].message.content,
              resQues: req.body.prompt
          });
      }
      else{
        res.status(200).send({
            botResponse: 'Your OpenAI API Key is not working right now. Please fix it.',
            resQues: req.body.prompt
        });
      }
});


export default router;
