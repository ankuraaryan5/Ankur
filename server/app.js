import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './db/dbConnection.js'

import router from './routes/authRoute.js'

const app = express()
dotenv.config({ path: './config/config.env' })
app.use(express.json())

app.use(cors())

app.use('/api/v1', router)

connectDB()
app.get('/', (req, res) => {
    res.send('Hello World!')
})
export default app