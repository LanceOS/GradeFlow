import mongoose from "mongoose"
const { Schema } = mongoose;

const classSchema = new Schema({
    name: String,
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    assignments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Assignments"
    }]
}, { timestamps: true });

const Classes = mongoose.model("Classes", classSchema);