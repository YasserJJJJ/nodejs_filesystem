import fs from 'fs';
import http from 'http';



const server = http.createServer((req, res) => {

    const pathName = req.url;
    if (pathName === '/' || pathName === '/home') {
        res.end('Welcome to the homepage');
    }
    else if (pathName === '/about') {
        res.end('Welcome to the about page');
    }
    else if( pathName === '/api') {

        fs.readFile('./data.json', 'utf-8', (err, data) => {
            res.end(data);
        });

    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Page not found</h1>');
    }

});

server.listen(3000, () => {

    console.log('Server is running on port 3000');

});