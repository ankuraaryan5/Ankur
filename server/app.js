import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './db/dbConnection.js'
import { v2 as cloudinary } from 'cloudinary';


import router from './routes/authRoute.js'

const app = express()
dotenv.config({ path: './config/config.env' })
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})
app.use(express.json())

app.use(cors())

app.use('/api/v1', router)


connectDB()
app.get('/', (req, res) => {
    res.send('Hello World!')
})
export default app