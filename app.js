const expr = require('express')
const app = expr()
app.use(expr.json())
const connectDB = require('./DB/connect')
require('dotenv').config()
const tasks = require('./routes/tasks')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(expr.static('./public'))
app.use(expr.json())


app.use('/api/v1/tasks',tasks)

app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`server is listening on port ${port}...`))
    }
    catch(err){
            console.log(err)
    }
}
start()