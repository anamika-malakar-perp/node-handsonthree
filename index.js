const express = require('express');
const app = express();

const middleWareOneFucntion = (req, res, next) => {
    console.log('We are in first middleware');
    next();
}

const middleWareTwoFucntion = (req, res, next) => {
    console.log('We are in second middleware')
    next();
}

// Since we are using it here for each route with the help of this app.use(middlewareFunction); code snippet, it will be called for each request
app.use(middleWareOneFucntion);

app.get('/', middleWareTwoFucntion, (req, res) => {
    console.log('inside route')
    res.send('inside the / route');
});

app.get('/first-no-middleware', (req, res) => {
    console.log('first no middleware route')
    res.send('inside the no middleware route')
})

app.get('/second-no-middleware', middleWareTwoFucntion, (req, res) => {
    console.log('second no middleware route')
    res.send('inside the no middleware route')
})

app.listen(3000, () => {
    console.log('Server started')
})