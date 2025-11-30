import Express from 'express';
import goodsList from '../data/goods.js';
import type {
  GoodsIndexQuery,
  GoodsRequest,
  RowGoodsQuery,
} from 'src/types/goods.js';
import type { GoodsStatus } from '@shared/types/goods.js';

// バリデーション関数
const isGoodsStatus = (value: string): value is GoodsStatus => {
  return (
    value === 'completed' || value === 'negotiating' || value === 'unexchanged'
  );
};

// 正規化のヘルバー関数
const normalizeQuery = (query: RowGoodsQuery): GoodsIndexQuery => {
  let series = query.series;
  let memberName = query.memberName;
  let status = query.status;

  // seriesの正規化
  if (Array.isArray(series)) {
    series = undefined;
  }

  // memberNameの正規化
  if (Array.isArray(memberName)) {
    memberName = undefined;
  }

  // statusの正規化
  let statusList: GoodsStatus[] = [];

  if (status === undefined) {
    // undefinedが入ってきた場合はそのまま全表示
    statusList = [];
  } else if (typeof status === 'string') {
    // string型だった場合はisGoodsStatus内のものならGoodsStatus[](例:['completed'])として、そうでなければ空配列とする
    statusList = [status].filter(isGoodsStatus);
  } else if (Array.isArray(status)) {
    // 配列だった場合はisGoodsStatus内のものだけ残す
    statusList = status.filter(isGoodsStatus);
  }

  const queryObject: GoodsIndexQuery = {
    series,
    memberName,
    statusList,
  };

  return queryObject;
};

export default {
  // 全シリーズ
  index: (req: GoodsRequest, res: Express.Response) => {
    // 渡ってきたシリーズ、メンバー名、ステータスを正規化したもの
    const { series, memberName, statusList } = normalizeQuery(req.query);

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
    if (series) {
      // クエリにseriesがあればそれを優先
      currentSeries = filtered.find((cSeries) => cSeries.id === series) ?? null;
    } else {
      // ない場合はseriesの先頭（最初のシリーズ）を選ぶ
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
    res.status(200).send({ filtered, currentSeries });
  },

  // 各シリーズごと
  showSeries: (req: Express.Request, res: Express.Response) => {
    // 渡ってきたシリーズID
    const series = req.params.series;

    // シリーズIDの存在チェック
    if (!series) {
      return res.status(400).send({
        message: 'シリーズIDが指定されていません。',
      });
    }

    // シリーズIDの存在チェック
    const seriesList = goodsList.find((cSeries) => cSeries.id === series);

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
