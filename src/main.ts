import { app } from './app';
import * as http from 'http';

let express = require("express")
const PORT = 8080;
const server = http.createServer(app);
server.listen(PORT);

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req: any, res: any) => {
    res.render('pages/home', { test: 'fc' })
})

server.on('listening', async () => {
    console.info(`Listening on port ${PORT}`);
    try {
        console.log("okkkkkkk")

    } catch (err) {
        console.log("okkkkkkk")
    }
});


