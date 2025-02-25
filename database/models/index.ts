import mongoose, { model } from "mongoose";
import { contestSchema, quizSchema } from "@/schemas/mongoose";
import { quizSubmissionSchema } from "@/schemas/mongoose/quiz-submissions";

export const Quiz = mongoose.models.Quiz || model("Quiz", quizSchema);
export const Contest =
  mongoose.models.Contest || model("Contest", contestSchema);
export const QuizSubmission =
  mongoose.models.QuizSubmission ||
  model("QuizSubmission", quizSubmissionSchema);
