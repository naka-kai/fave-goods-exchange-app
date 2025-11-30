import Express from 'express';
import type { GoodsStatus } from '@shared/types/goods.js';

export type GoodsRequest = Express.Request<
  unknown,
  unknown,
  unknown,
  RowGoodsQuery
>;

export type RowGoodsQuery = {
  series?: string | string[];
  memberName?: string | string[];
  status?: string | string[];
};

export type GoodsIndexQuery = {
  series: string | undefined;
  memberName: string | undefined;
  statusList: GoodsStatus[];
};
