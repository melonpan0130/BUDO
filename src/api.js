const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

app.set('view engine', 'pug');
app.set('views', '../views');

router.get('/', (req, res)=> {
    res.render('test');
});

router.get('/test', (req, res)=> {
    res.json({
        'hello' : 'test'
    });
});

app.use('/', router);
module.exports.handler = serverless(app);