import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import chatResponse from './Routes/chatResponse.js';

const port = process.env.PORT || 8000;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(cors());
app.use(express.json());

//ROUTES
app.use(chatResponse);

//  SERVING FRONTEND

app.use(express.static(path.join(__dirname, 'Client', 'build')));
app.get('*', (req, res) => {
    res.sendFile(
        path.join(__dirname, './Client/build/index.html'),
        function(err){
            res.status(500).send(err);
        }
    )
})

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
