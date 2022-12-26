const express = require('express');
const router = new express.Router();

const dirname = __dirname.replace('\\router', '');

router.get("/", (req, res) => {
    res.sendFile(dirname + "/src/index.html");
});
  
router.get("/select_player", (req, res) => {
    res.sendFile(dirname + "/src/select_player.html");
});

router.get("/select_mode_single", (req, res) => {
    res.sendFile(dirname + "/src/select_mode_single.html");
});

router.get("/select_mode_dual", (req, res) => {
    res.sendFile(dirname + "/src/select_mode_dual.html");
});

router.get("/push-up/dual/end", (req, res) => {
    res.sendFile(dirname + "/src/double_end_page_count.html");
});

module.exports = router