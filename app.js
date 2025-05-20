const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const router = require('./routes/routes.js')

const app = express()
app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))
app.use(router)

app.listen(3000, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:3000`);
});

module.exports = app