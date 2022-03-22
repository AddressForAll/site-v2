const express = require('express')

const app = express()

const baseDir = `${__dirname}/build/`

app.use(express.static(`${baseDir}`))
app.get('/*', (req,res) => res.sendFile('index.html' , { root : baseDir }))

const port = process.env.PORT || 4000 

app.listen(port, () => console.log('Server successfully went up!'))