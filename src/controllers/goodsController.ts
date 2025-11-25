import Express from 'express';
import goodsList from '../data/goods.js';

export default {
  // 全シリーズ
  index: (req: Express.Request, res: Express.Response) => {
    // 渡ってきたメンバー名
    const { memberName, seriesId } = req.query as {
      memberName?: string;
      seriesId?: string;
    };

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

    // selectタグ用の現在のシリーズ
    let currentSeries = null;

    // クエリに指定があった場合は実行される
    if (seriesId) {
      // クエリにseriesIdがあればそれを優先
      currentSeries = filtered.find((series) => series.id === seriesId) ?? null;
    } else {
      // ない場合はseriesIdの先頭（最初のシリーズ）を選ぶ
      if (filtered.length > 0) {
        currentSeries = filtered[0];
      }
    }

    // メンバーの存在チェック
    if (filtered.length === 0) {
      return res.status(404).send({
        message: 'このメンバーは見つかりませんでした。',
      });
    }

    // 絞り込み結果を返却
    res.render('goods/index', { filtered, currentSeries });
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
