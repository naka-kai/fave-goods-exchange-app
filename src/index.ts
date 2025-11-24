import Express, {
  type Application,
  type Request,
  type Response,
} from 'express';
import router from './routes/index.js';

const app: Application = Express();
const PORT = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express + TypeScript!');
});
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
