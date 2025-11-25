type GoodsItem = {
  fromLeft: number;
  num: number;
  status: 'completed' | 'negotiating' | 'unexchanged';
  createdAt: Date;
};

type GoodsMember = {
  member: string;
  items: GoodsItem[];
};

type GoodsSeries = {
  id: string;
  title: string;
  members: GoodsMember[];
};

let goodsList: GoodsSeries[] = [
  {
    id: '1',
    title: 'B9 Unlimited',
    members: [
      {
        member: 'KAI',
        items: [
          {
            fromLeft: 1,
            num: 3,
            status: 'completed',
            createdAt: new Date(),
          },
          {
            fromLeft: 2,
            num: 1,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 4,
            num: 2,
            status: 'negotiating',
            createdAt: new Date(),
          },
          {
            fromLeft: 5,
            num: 1,
            status: 'unexchanged',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'RYOGA',
        items: [
          {
            fromLeft: 2,
            num: 2,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 3,
            num: 1,
            status: 'negotiating',
            createdAt: new Date(),
          },
          {
            fromLeft: 5,
            num: 3,
            status: 'completed',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'TAKUYA',
        items: [
          {
            fromLeft: 1,
            num: 1,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 3,
            num: 3,
            status: 'completed',
            createdAt: new Date(),
          },
          {
            fromLeft: 4,
            num: 2,
            status: 'unexchanged',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'YUKI',
        items: [
          {
            fromLeft: 1,
            num: 2,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 4,
            num: 1,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 5,
            num: 3,
            status: 'negotiating',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'TAKASHI',
        items: [
          {
            fromLeft: 1,
            num: 3,
            status: 'negotiating',
            createdAt: new Date(),
          },
          {
            fromLeft: 2,
            num: 1,
            status: 'completed',
            createdAt: new Date(),
          },
          {
            fromLeft: 3,
            num: 2,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 5,
            num: 2,
            status: 'unexchanged',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'SHUYA',
        items: [
          {
            fromLeft: 2,
            num: 1,
            status: 'completed',
            createdAt: new Date(),
          },
          {
            fromLeft: 3,
            num: 3,
            status: 'negotiating',
            createdAt: new Date(),
          },
          {
            fromLeft: 4,
            num: 2,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 5,
            num: 1,
            status: 'unexchanged',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'MASAHIRO',
        items: [
          {
            fromLeft: 1,
            num: 1,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 2,
            num: 3,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 3,
            num: 2,
            status: 'completed',
            createdAt: new Date(),
          },
          {
            fromLeft: 4,
            num: 1,
            status: 'negotiating',
            createdAt: new Date(),
          },
          {
            fromLeft: 5,
            num: 2,
            status: 'unexchanged',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'ALOHA',
        items: [
          {
            fromLeft: 3,
            num: 3,
            status: 'negotiating',
            createdAt: new Date(),
          },
          {
            fromLeft: 4,
            num: 1,
            status: 'completed',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'HARU',
        items: [
          {
            fromLeft: 2,
            num: 2,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 5,
            num: 3,
            status: 'unexchanged',
            createdAt: new Date(),
          },
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'T.I.M.E',
    members: [
      {
        member: 'KAI',
        items: [
          {
            fromLeft: 1,
            num: 2,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 2,
            num: 1,
            status: 'completed',
            createdAt: new Date(),
          },
          {
            fromLeft: 4,
            num: 3,
            status: 'negotiating',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'RYOGA',
        items: [
          {
            fromLeft: 2,
            num: 3,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 3,
            num: 1,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 5,
            num: 2,
            status: 'completed',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'TAKUYA',
        items: [
          {
            fromLeft: 1,
            num: 1,
            status: 'negotiating',
            createdAt: new Date(),
          },
          {
            fromLeft: 3,
            num: 2,
            status: 'completed',
            createdAt: new Date(),
          },
          {
            fromLeft: 4,
            num: 1,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 5,
            num: 3,
            status: 'unexchanged',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'YUKI',
        items: [
          {
            fromLeft: 1,
            num: 3,
            status: 'completed',
            createdAt: new Date(),
          },
          {
            fromLeft: 2,
            num: 2,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 4,
            num: 1,
            status: 'negotiating',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'TAKASHI',
        items: [
          {
            fromLeft: 2,
            num: 1,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 3,
            num: 3,
            status: 'completed',
            createdAt: new Date(),
          },
          {
            fromLeft: 4,
            num: 2,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 5,
            num: 1,
            status: 'negotiating',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'SHUYA',
        items: [
          {
            fromLeft: 1,
            num: 2,
            status: 'completed',
            createdAt: new Date(),
          },
          {
            fromLeft: 3,
            num: 1,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 4,
            num: 3,
            status: 'unexchanged',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'MASAHIRO',
        items: [
          {
            fromLeft: 2,
            num: 1,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 3,
            num: 2,
            status: 'negotiating',
            createdAt: new Date(),
          },
          {
            fromLeft: 5,
            num: 3,
            status: 'completed',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'ALOHA',
        items: [
          {
            fromLeft: 1,
            num: 3,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 4,
            num: 2,
            status: 'completed',
            createdAt: new Date(),
          },
          {
            fromLeft: 5,
            num: 1,
            status: 'unexchanged',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'HARU',
        items: [
          {
            fromLeft: 2,
            num: 2,
            status: 'negotiating',
            createdAt: new Date(),
          },
          {
            fromLeft: 3,
            num: 1,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 5,
            num: 3,
            status: 'completed',
            createdAt: new Date(),
          },
        ],
      },
    ],
  },
  {
    id: '3',
    title: 'Rail is Beautiful',
    members: [
      {
        member: 'KAI',
        items: [
          {
            fromLeft: 1,
            num: 2,
            status: 'completed',
            createdAt: new Date(),
          },
          {
            fromLeft: 3,
            num: 1,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 4,
            num: 3,
            status: 'unexchanged',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'RYOGA',
        items: [
          {
            fromLeft: 2,
            num: 3,
            status: 'negotiating',
            createdAt: new Date(),
          },
          {
            fromLeft: 3,
            num: 1,
            status: 'completed',
            createdAt: new Date(),
          },
          {
            fromLeft: 5,
            num: 2,
            status: 'unexchanged',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'TAKUYA',
        items: [
          {
            fromLeft: 1,
            num: 1,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 2,
            num: 2,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 4,
            num: 3,
            status: 'negotiating',
            createdAt: new Date(),
          },
          {
            fromLeft: 5,
            num: 1,
            status: 'completed',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'YUKI',
        items: [
          {
            fromLeft: 1,
            num: 3,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 3,
            num: 2,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 4,
            num: 1,
            status: 'completed',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'TAKASHI',
        items: [
          {
            fromLeft: 2,
            num: 1,
            status: 'completed',
            createdAt: new Date(),
          },
          {
            fromLeft: 3,
            num: 3,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 5,
            num: 2,
            status: 'negotiating',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'SHUYA',
        items: [
          {
            fromLeft: 1,
            num: 2,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 4,
            num: 1,
            status: 'completed',
            createdAt: new Date(),
          },
          {
            fromLeft: 5,
            num: 3,
            status: 'unexchanged',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'MASAHIRO',
        items: [
          {
            fromLeft: 2,
            num: 2,
            status: 'negotiating',
            createdAt: new Date(),
          },
          {
            fromLeft: 3,
            num: 1,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 4,
            num: 3,
            status: 'completed',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'ALOHA',
        items: [
          {
            fromLeft: 1,
            num: 1,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 2,
            num: 3,
            status: 'completed',
            createdAt: new Date(),
          },
          {
            fromLeft: 5,
            num: 2,
            status: 'unexchanged',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'HARU',
        items: [
          {
            fromLeft: 3,
            num: 2,
            status: 'completed',
            createdAt: new Date(),
          },
          {
            fromLeft: 4,
            num: 1,
            status: 'unexchanged',
            createdAt: new Date(),
          },
        ],
      },
    ],
  },
  {
    id: '4',
    title: 'AwA AwA',
    members: [
      {
        member: 'KAI',
        items: [
          {
            fromLeft: 1,
            num: 3,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 3,
            num: 1,
            status: 'completed',
            createdAt: new Date(),
          },
          {
            fromLeft: 4,
            num: 2,
            status: 'negotiating',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'RYOGA',
        items: [
          {
            fromLeft: 2,
            num: 2,
            status: 'negotiating',
            createdAt: new Date(),
          },
          {
            fromLeft: 3,
            num: 1,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 5,
            num: 3,
            status: 'completed',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'TAKUYA',
        items: [
          {
            fromLeft: 1,
            num: 1,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 2,
            num: 3,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 4,
            num: 2,
            status: 'completed',
            createdAt: new Date(),
          },
          {
            fromLeft: 5,
            num: 1,
            status: 'negotiating',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'YUKI',
        items: [
          {
            fromLeft: 1,
            num: 2,
            status: 'completed',
            createdAt: new Date(),
          },
          {
            fromLeft: 3,
            num: 3,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 4,
            num: 1,
            status: 'unexchanged',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'TAKASHI',
        items: [
          {
            fromLeft: 2,
            num: 1,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 3,
            num: 3,
            status: 'negotiating',
            createdAt: new Date(),
          },
          {
            fromLeft: 5,
            num: 2,
            status: 'completed',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'SHUYA',
        items: [
          {
            fromLeft: 1,
            num: 3,
            status: 'completed',
            createdAt: new Date(),
          },
          {
            fromLeft: 3,
            num: 1,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 4,
            num: 2,
            status: 'unexchanged',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'MASAHIRO',
        items: [
          {
            fromLeft: 2,
            num: 3,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 3,
            num: 2,
            status: 'completed',
            createdAt: new Date(),
          },
          {
            fromLeft: 4,
            num: 1,
            status: 'negotiating',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'ALOHA',
        items: [
          {
            fromLeft: 1,
            num: 1,
            status: 'completed',
            createdAt: new Date(),
          },
          {
            fromLeft: 3,
            num: 2,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 5,
            num: 3,
            status: 'unexchanged',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'HARU',
        items: [
          {
            fromLeft: 2,
            num: 2,
            status: 'negotiating',
            createdAt: new Date(),
          },
          {
            fromLeft: 4,
            num: 1,
            status: 'completed',
            createdAt: new Date(),
          },
        ],
      },
    ],
  },
  {
    id: '5',
    title: 'Joker',
    members: [
      {
        member: 'KAI',
        items: [
          {
            fromLeft: 1,
            num: 3,
            status: 'negotiating',
            createdAt: new Date(),
          },
          {
            fromLeft: 2,
            num: 1,
            status: 'completed',
            createdAt: new Date(),
          },
          {
            fromLeft: 4,
            num: 2,
            status: 'unexchanged',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'RYOGA',
        items: [
          {
            fromLeft: 1,
            num: 2,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 3,
            num: 1,
            status: 'completed',
            createdAt: new Date(),
          },
          {
            fromLeft: 5,
            num: 3,
            status: 'negotiating',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'TAKUYA',
        items: [
          {
            fromLeft: 2,
            num: 3,
            status: 'completed',
            createdAt: new Date(),
          },
          {
            fromLeft: 4,
            num: 1,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 5,
            num: 2,
            status: 'unexchanged',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'YUKI',
        items: [
          {
            fromLeft: 1,
            num: 1,
            status: 'completed',
            createdAt: new Date(),
          },
          {
            fromLeft: 2,
            num: 2,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 4,
            num: 3,
            status: 'negotiating',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'TAKASHI',
        items: [
          {
            fromLeft: 3,
            num: 2,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 4,
            num: 1,
            status: 'unexchanged',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'SHUYA',
        items: [
          {
            fromLeft: 1,
            num: 3,
            status: 'completed',
            createdAt: new Date(),
          },
          {
            fromLeft: 2,
            num: 2,
            status: 'negotiating',
            createdAt: new Date(),
          },
          {
            fromLeft: 5,
            num: 1,
            status: 'unexchanged',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'MASAHIRO',
        items: [
          {
            fromLeft: 2,
            num: 2,
            status: 'completed',
            createdAt: new Date(),
          },
          {
            fromLeft: 3,
            num: 1,
            status: 'unexchanged',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'ALOHA',
        items: [
          {
            fromLeft: 1,
            num: 1,
            status: 'negotiating',
            createdAt: new Date(),
          },
          {
            fromLeft: 4,
            num: 3,
            status: 'unexchanged',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'HARU',
        items: [
          {
            fromLeft: 2,
            num: 3,
            status: 'completed',
            createdAt: new Date(),
          },
          {
            fromLeft: 5,
            num: 1,
            status: 'unexchanged',
            createdAt: new Date(),
          },
        ],
      },
    ],
  },
  {
    id: '6',
    title: 'EVE',
    members: [
      {
        member: 'KAI',
        items: [
          {
            fromLeft: 1,
            num: 2,
            status: 'completed',
            createdAt: new Date(),
          },
          {
            fromLeft: 3,
            num: 1,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 4,
            num: 3,
            status: 'negotiating',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'RYOGA',
        items: [
          {
            fromLeft: 2,
            num: 1,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 3,
            num: 3,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 5,
            num: 2,
            status: 'completed',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'TAKUYA',
        items: [
          {
            fromLeft: 1,
            num: 1,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 2,
            num: 2,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 4,
            num: 3,
            status: 'completed',
            createdAt: new Date(),
          },
          {
            fromLeft: 5,
            num: 1,
            status: 'negotiating',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'YUKI',
        items: [
          {
            fromLeft: 1,
            num: 3,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 3,
            num: 2,
            status: 'completed',
            createdAt: new Date(),
          },
          {
            fromLeft: 4,
            num: 1,
            status: 'unexchanged',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'TAKASHI',
        items: [
          {
            fromLeft: 2,
            num: 2,
            status: 'negotiating',
            createdAt: new Date(),
          },
          {
            fromLeft: 3,
            num: 1,
            status: 'completed',
            createdAt: new Date(),
          },
          {
            fromLeft: 5,
            num: 3,
            status: 'unexchanged',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'SHUYA',
        items: [
          {
            fromLeft: 1,
            num: 1,
            status: 'completed',
            createdAt: new Date(),
          },
          {
            fromLeft: 4,
            num: 3,
            status: 'unexchanged',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'MASAHIRO',
        items: [
          {
            fromLeft: 2,
            num: 3,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 3,
            num: 2,
            status: 'negotiating',
            createdAt: new Date(),
          },
          {
            fromLeft: 5,
            num: 1,
            status: 'completed',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'ALOHA',
        items: [
          {
            fromLeft: 1,
            num: 2,
            status: 'unexchanged',
            createdAt: new Date(),
          },
          {
            fromLeft: 2,
            num: 1,
            status: 'completed',
            createdAt: new Date(),
          },
          {
            fromLeft: 5,
            num: 3,
            status: 'unexchanged',
            createdAt: new Date(),
          },
        ],
      },
      {
        member: 'HARU',
        items: [
          {
            fromLeft: 3,
            num: 1,
            status: 'completed',
            createdAt: new Date(),
          },
          {
            fromLeft: 4,
            num: 2,
            status: 'negotiating',
            createdAt: new Date(),
          },
        ],
      },
    ],
  },
];

export default goodsList;
