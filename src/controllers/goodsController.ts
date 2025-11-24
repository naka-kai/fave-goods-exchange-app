import Express from 'express';
import goodsList from '../data/goods.js';

export default {
  // 全シリーズ
  index: (req: Express.Request, res: Express.Response) => {
    res.status(200).send(goodsList);
  },

  // 各シリーズごと
  showSeries: (req: Express.Request, res: Express.Response) => {
    // 渡ってきたシリーズID
    const seriesId = req.params.seriesId;

    // シリーズIDの存在チェック
    if (!seriesId) {
      return res.status(400).send({
        message: 'シリーズIDが指定されていません。',
      });
    }

    // シリーズIDの存在チェック
    const seriesList = goodsList.find((series) => series.id === seriesId);

    // シリーズが見つからなかった場合
    if (seriesList == null) {
      return res.status(404).send({
        message: 'このシリーズは見つかりませんでした。',
      });
    }

    // 各シリーズのデータを返却
    res.status(200).send(seriesList);
  },
};
