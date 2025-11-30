import type { GoodsStatus } from '@shared/types/goods.js';

export type GoodsIndexQuery = {
  series: string | undefined;
  memberName: string | undefined;
  statusList: GoodsStatus[];
};
