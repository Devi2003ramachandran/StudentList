import express from 'express'
import cors from 'cors'
import dbConnection from './config/Db.js'
import sturoute from './routes/studentRoute.js'

const app = express()

app.use(express.json())
app.use(cors())
app.use("/student",sturoute)


dbConnection()


app.listen(8000,()=>{
    console.log("Server is listening on port no 8000...")
})














