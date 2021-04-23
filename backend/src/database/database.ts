import mongoose from 'mongoose'
import { environment } from '../config/config';

mongoose.connect(environment.db.url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise

export { mongoose }