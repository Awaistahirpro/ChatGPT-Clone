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
    try {
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{role: 'user', content: req.body.prompt + '\n and style the response as much as possible.'}]
          });
        res.status(200).send({
            botResponse: response.data.choices[0].message.content,
            resQues: req.body.prompt
        });
    } catch (error) {
        res.statusCode(500).send("Server error.")
    }
    
});


export default router;
