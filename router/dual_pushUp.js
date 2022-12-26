const express = require('express');
const router = new express.Router();

const dirname = __dirname.replace('\\router', '');

router.get("/push-up_dual", (req, res) => {
    res.sendFile(dirname + "/src/push-up_dual.html");
});

router.get("/push-up/dual", (req, res) => {
    res.sendFile(dirname + "/src/doubleTime_count.html");
});

module.exports = router;