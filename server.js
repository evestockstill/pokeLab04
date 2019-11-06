/* eslint-disable no-undef */
require('dotenv').config();
const express = require('express');
const app = express();
// eslint-disable-next-line no-unused-vars
const cors = require('cors');
// eslint-disable-next-line no-unused-vars
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});