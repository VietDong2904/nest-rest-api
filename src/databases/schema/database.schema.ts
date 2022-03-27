import * as mongoose from 'mongoose'

export const DatabaseSchema = new mongoose.Schema({
    name: String,
    description: String,
    qty: Number
});