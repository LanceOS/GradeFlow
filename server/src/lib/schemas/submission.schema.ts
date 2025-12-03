import mongoose from "mongoose";
const { Schema } = mongoose;

const submissionsSchema = new Schema({
    assignment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Assignment"
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    submissionDate: Date,
    status: ["pending", "graded"],
    feedback: String,
    grade: String
}, { timestamps: true });

const Submissions = mongoose.model("Submissions", submissionsSchema)