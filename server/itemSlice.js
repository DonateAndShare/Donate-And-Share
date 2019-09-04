const express = require("express");
const cors = require("cors");

var router = express.Router();

const mongo = require("../database/itemSlice")

router.get('/test', (req, res) => {
    mongo.readData((result) => {
        res.json(result);
    })
});
router.get('/user', (req, res) => {
    console.log('itemslice')
    mongo.readData((result) => {
        console.log('result', result)
        console.log('result', result)
        res.json(result);
    })
});

module.exports = router;