# 推し活グッズ交換メモアプリ

#### 推し活グッズの交換を手動で画像管理するのは大変ではないでしょうか？
#### そこで、もし少しでも便利になれば嬉しいなと思い、このアプリを作成しています。

## 機能
- シリーズ、メンバー、ステータスを選択するとそれに該当するアイテムが表示される
- 交換済・交渉中・未交換が何枚あるか一目で確認できる


## 開発環境 起動方法メモ
### backend
```zsh
cd backend
npm i
npm run dev
```
-> http://localhost:4000

### frontend
```zsh
cd frontend
npm i
npm run dev
```
-> http://localhost:3000

### shared
```zsh
cd shared
npx tsc -p tsconfig.types.json
```
-> /dist/types/goods.d.tsを出力