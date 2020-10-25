import express, { Request, Response } from 'express';
import { json } from 'body-parser';
const app = express();

app.use(json());
const port = 8081;

app.get('/', (req: Request, res: Response) => {
  res.send(`hellow from node typescript ` + new Date());
});

app.listen(port, () => {
  console.log(`Listening on port ${port} !`);
});
