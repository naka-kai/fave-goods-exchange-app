import Express from 'express';
import goodsList from '../data/goods.js';

export default {
  // 全シリーズ
  index: (req: Express.Request, res: Express.Response) => {
    // 渡ってきたメンバー名
    const { memberName } = req.query;

    // 「絞り込まれたもの」用の初期値
    let filtered = goodsList;

    // クエリに指定があった場合は実行される
    if (memberName) {
      filtered = goodsList
        .map((goods) => {
          // シリーズの中のメンバーを絞る
          const filteredMember = goods.members.filter(
            (members) => members.member === memberName,
          );
          // 元オブジェクトをコピーしてその上からメンバーだけ上書き
          return {
            ...goods,
            members: filteredMember,
          };
        })
        // メンバーがいない場合はそのシリーズごと消す
        .filter((goods) => goods.members.length > 0);
    }

    // メンバーの存在チェック
    if (filtered.length === 0) {
      return res.status(404).send({
        message: 'このメンバーは見つかりませんでした。',
      });
    }

    // 絞り込み結果を返却
    res.status(200).send(filtered);
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
