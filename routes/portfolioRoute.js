const express = require('express');
const { handleSubmit } = require('../client/src/pages/Contact/Contact');

//router object 
const router = express.Router();

//routes
router.post("/sendEmail", handleSubmit);

//export 
 module.exports = router;

