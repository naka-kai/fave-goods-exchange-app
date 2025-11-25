import Express from 'express';
import healthController from '../controllers/healthController.js';

const router = Express.Router();

router.get('/', healthController.index);

export default router;
