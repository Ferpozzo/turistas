import { ServiceSchema } from './Service';
import mongoose, { Schema } from 'mongoose'

export interface LocaleInterface extends mongoose.Document {
    _id?: string,
    _userId?: string,
    name: string,
    type: 'Home' | 'Hotel',
    status: 'Active' | 'Inactive',
    updatedAt?: Date,
    createdAt?: Date
}
export const LocaleSchema = new mongoose.Schema({
    _userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)
const Locale = mongoose.model('Locale', LocaleSchema)

export { Locale }