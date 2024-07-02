import './subscribe';

import express from 'express';
import routes from './routes';

const app = express();
app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Notification service started ${PORT}`);
});
