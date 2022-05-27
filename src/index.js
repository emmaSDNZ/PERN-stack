const express = require('express')
const morgan = require('morgan')
const cors = require('cors')



const taskRouter =  require('./routes/tasks.routes.js')

const app = express()
app.use(cors())
app.use(morgan('dev')) // para ver por consola las peticiones que llegan
app.use(express.json())
app.use(taskRouter)
app.use((err,req,res,next) =>{
    return res.json({
        message: err.message
    })
})

app.listen(3001)
console.log("Server on port 3001")