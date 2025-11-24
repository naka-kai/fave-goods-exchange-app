import Express from 'express';
import goodsController from '../controllers/goodsController.js';

const router = Express.Router();

router.get('/goods', goodsController.index);
router.get('/goods/:seriesId', goodsController.showSeries);

export default router;
