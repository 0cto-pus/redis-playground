// src/server.ts
import app from './app';

const start = async () => {
  const PORT = process.env.PORT || 3001;

  app.listen(PORT, () => {
    console.log(`Auth server is running on port ${PORT}`);
  });
};
start();
