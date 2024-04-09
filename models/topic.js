import mongoose, { Schema } from "mongoose";

// Task Schema
// const topicSchema = new Schema(
//   {
//     title: String,
//     description: String,
//     github: String,
//     email: {type: String,
//     default: 'abc@example.com'}
//   },
//   {
//     timestamps: true,
//   }
// );



const topicSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


// Topic Model
const TaskTopic = mongoose.models.TaskTopic || mongoose.model("TaskTopic", topicSchema);

export { TaskTopic };
