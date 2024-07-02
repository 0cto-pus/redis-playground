import app from './app';

const start = async () => {
  const PORT = process.env.PORT || 3003;

  app.listen(PORT, () => {
    console.log(`Product server is running on port ${PORT}`);
  });
};
start();
