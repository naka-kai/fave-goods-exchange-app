import Express from 'express';
import goodsController from '../controllers/goodsController.js';

const router = Express.Router();

router.get('/', goodsController.index);
router.get('/:seriesId', goodsController.showSeries);

export default router;
