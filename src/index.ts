import express, { Application, Request, Response } from 'express';
import 'dotenv/config';

const port = process.env.PORT || 8080;

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.send({ data: 'Hello from back wishlist' });
});

app.listen(port, () => console.log(`Server is listening on port ${port}!`));
