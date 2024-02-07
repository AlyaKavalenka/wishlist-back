import express, { Application } from 'express';
import 'dotenv/config';
import router from './routes/user.routes';
import wishlistRouter from './routes/wishlist.routes';
import wishRouter from './routes/wish.routes';
import cors from 'cors';

const port = process.env.PORT || 8080;

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use('/api', wishlistRouter);
app.use('/api', wishRouter);

app.listen(port, () => console.log(`Server is listening on port ${port}!`));
