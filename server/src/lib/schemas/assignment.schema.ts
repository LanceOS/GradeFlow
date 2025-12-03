import mongoose from "mongoose";
const { Schema } = mongoose;

const assignment = new Schema({
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Classes"
    },
    title: String,
    dueDate: Date,
    maxPoints: {
        type: Number,
        default: 100
    },
    rubric: {
        type: Number,
        ref: "Submissions"
    },
    storagePath: String
}, { timestamps: true })

const Assignment = mongoose.model("Assignment", assignment)