const express = require('express');
const router = new express.Router();

const dirname = __dirname.replace('\\router', '');

router.get('/dual', async(req, res) => {
    res.sendFile(dirname+'/src/img/dual.png')
})

router.get('/single', async(req, res) => {
    res.sendFile(dirname+'/src/img/single.png')
})

router.get('/single1', async(req, res) => {
    res.sendFile(dirname+'/src/img/single1.png')
})

router.get('/plunk', async(req, res) => {
    res.sendFile(dirname+'/src/img/plunk.png')
})

router.get('/plunk1', async(req, res) => {
    res.sendFile(dirname+'/src/img/plunk1.png')
})

router.get('/push_up', async(req, res) => {
    res.sendFile(dirname+'/src/img/push_up.png')
})

router.get('/push_up1', async(req, res) => {
    res.sendFile(dirname+'/src/img/push_up1.png')
})

module.exports = router