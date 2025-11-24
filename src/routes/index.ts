import Express from 'express';
import healthRoutes from './healthRoutes.js';

const router = Express.Router();

router.use('/health', healthRoutes);

export default router;
