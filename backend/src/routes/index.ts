import Express from 'express';
import healthRoutes from './healthRoutes.js';
import goodsRoutes from './goodsRoutes.js';

const router = Express.Router();

router.use('/health', healthRoutes);
router.use('/api/v1/goods', goodsRoutes);

export default router;
