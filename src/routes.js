import userRouter from './routes/userRoutes';

export default (app) => {
  app.use('/users', userRouter);
};
