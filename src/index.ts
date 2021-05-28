import express from 'express'
import routes from './routes/app.routes'
import {config } from 'dotenv'
const app = express()

config()
app.use(express.json())
app.use(routes)


app.listen(8000, () => console.log('app listen on port 8000'))