const express = require('express');
const path = require('path');
const app = express();

app.use('/CSS', express.static(path.join(__dirname, 'CSS')));
app.use('/JS', express.static(path.join(__dirname, 'JS')));
app.use('/Images', express.static(path.join(__dirname, 'Images')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/TheGallery', (req, res) => {
    res.sendFile(path.join(__dirname, 'thegallery.html'));
});
app.get('/Projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'projects.html'));
});
app.get('/E-Shop', (req, res) => {
    res.sendFile(path.join(__dirname, 'e-shop.html'));
});
app.get('/Philosophy', (req, res) => {
    res.sendFile(path.join(__dirname, 'philosophy.html'));
});
app.get('/Contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contactus.html'));
});
app.get('/Profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'profile.html'));
})
app.get('/Products', (req, res) => {
    res.sendFile(path.join(__dirname, 'products.json'));
})
app.get('/Cart', (req, res) => {
    res.sendFile(path.join(__dirname, 'cart.html'));
})

app.listen(3000, () => {
    const host = '127.0.0.1';
    const port = '3000';
    console.log(`http://${host}:${port}`);
});