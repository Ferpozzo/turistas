import { environment } from './config/config';
import express from 'express'
import { routes } from './routes/router'
import cors from 'cors'
const app = express()
const corsOptions = environment.security.cors
app.use(cors())
app.use(express.json())
app.use(routes)
export { app }