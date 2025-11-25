import Express, {
  type Application,
  type Request,
  type Response,
} from 'express';
import router from './routes/index.js';
import expressEjsLayouts from 'express-ejs-layouts';

const app: Application = Express();
const PORT = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express + TypeScript!');
});

app.set('view engine', 'ejs');
app.use(expressEjsLayouts);

app.use(Express.static('public'));

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
