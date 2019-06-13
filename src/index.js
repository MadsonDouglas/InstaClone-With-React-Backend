const express = require('express')
const path = require('path')
const cors = require('cors')

const db = require('mongoose')

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

db.connect('mongodb://localhost:27017/projectbackend', { useNewUrlParser: true })

app.use((req, res, next) => {
    req.io = io
    next()
})

app.use(cors())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'redimensionada')))
app.use(require('./routes/index'))


const PORT = process.env.PORT || 3001
server.listen(PORT, () => {
    console.log(`Processo rodando em http://localhost:${PORT}`)
})