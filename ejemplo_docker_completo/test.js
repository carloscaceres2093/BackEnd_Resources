'use strict'

const express = require('express')

const PORT = 8080
const HOST = '0.0.0.0'

const app = express()

app.get('/', (req, res) => {
    res.send('Hello BackEnd Course')
}
)

app.listen(PORT, HOST, () => {
    console.log(`Runnig on http://${HOST}:${PORT}`)
}
)