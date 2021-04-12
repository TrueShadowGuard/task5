const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = 3001
const path = require('path')
const app = express()


app.use(bodyParser.json())
app.use(authRouter)
console.log(path.join(__dirname,'index.html'))
app.use(express.static("."))

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://SHADOW:qaz123qaz@cluster0.aqh4t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
            useNewUrlParser: true
        })
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()

