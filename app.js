const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 4000;
const multer = require('multer')
const path = require('path')
const bodyParser = require('body-parser');
const User = require('./userModel')
// const {importUser}=require('./controller/userControlller')
mongoose.connect('mongodb://0.0.0.0:27017/assignment').then(() => {
    console.log("connected db")
}).catch((err) => {
    console.log(`errore :${err}`)
})

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.resolve(__dirname,'public')));

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

let upload = multer({ storage: storage })

const { importUser } = require('./controller/userControlller');

// post req
app.post('/importuser', upload.single('file'),importUser);
app.listen(port, () => {
    console.log(`listening to port ${port}`);
})