import Express from 'express';
import goodsRoutes from './goodsRoutes.js';

const router = Express.Router();

router.use('/api/v1/goods', goodsRoutes);

export default router;
