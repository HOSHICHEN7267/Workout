const express = require('express');
const router = new express.Router();

const dirname = __dirname.replace('\\router', '');

router.get("/push-up", (req, res) => {
    res.sendFile(dirname + "/src/push-up.html");
});

router.get("/push-up/single", (req, res) => {
    res.sendFile(dirname + "/src/singleTime_count.html");
});

module.exports = router;