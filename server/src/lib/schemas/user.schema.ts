import mongoose from "mongoose"
const { Schema } = mongoose;

const userSchema = new Schema({
    username: String,
    passwordHash: String,
    role: (['student', 'teacher', 'admin']),
    classes: [{
        type: String,
        ref: "Classes"
    }]
}, { timestamps: true });

const User = mongoose.model('User', userSchema);