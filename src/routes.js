import userRouter from './routes/userRoutes';
import categoryRouter from './routes/categoryRoutes';
import postRouter from './routes/postRoutes';

export default (app) => {
  app.use('/users', userRouter);
  app.use('/categories', categoryRouter);
  app.use('/posts', postRouter);
};
