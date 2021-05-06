import { environment } from './config/config';
import express from 'express'
import { routes } from './routes/router'
import cors from 'cors'
import fileUpload from 'express-fileupload';
const app = express()
const corsOptions = environment.security.cors
app.use(cors())
app.use(express.json())
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
}));
app.use(routes)
export { app }