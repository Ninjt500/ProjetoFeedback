import feedback from 'express';
import { feedbacksController } from '../controllers/feedbacksController';
const feedbacksRouter = feedback.Router();

feedbacksRouter.get("/feedbacks", feedbacksController.GetFeedbacks);

feedbacksRouter.get("/feedbacks/:id", feedbacksController.GetFeedback);

feedbacksRouter.post("/feedbacks", feedbacksController.PostFeedback);

feedbacksRouter.patch("/feedbacks/:id", feedbacksController.PatchFeedback);

feedbacksRouter.delete("/feedbacks/:id", feedbacksController.DeleteFeedback);

feedbacksRouter.delete("/feedbacks", feedbacksController.DeleteFeedbacks);

export const FeedbacksRouter = feedbacksRouter;