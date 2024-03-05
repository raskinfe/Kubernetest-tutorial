import express from 'express';
import os from 'os';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    const helloMessage = `Hello from ${os.hostname()}\n`;
    console.log(helloMessage);
    res.send(helloMessage);
})

app.get('/nginx', (req, res) => {
    
})

app.listen(PORT, () => {
    console.log(`app is running at ${PORT}`);
})