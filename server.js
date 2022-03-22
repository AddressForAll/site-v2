const express = require('express')

const app = express()

const baseDir = `${__dirname}/build/`

app.use(express.static(`${baseDir}`))
app.get('*', (req,res) => res.sendFile('index.html' , { root : baseDir }))

// This port number is an example
const port = 4000 

app.listen(port, () => console.log(`Server successfully went up on http://localhost:${port}`))