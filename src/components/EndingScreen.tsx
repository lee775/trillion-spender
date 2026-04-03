import { SHOP_ITEMS } from "../data/items";
import { getStatMessage } from "../data/items";

interface TitleInfo {
  id: string;
  name: string;
  description: string;
}

interface Props {
  nickname: string;
  totalSpent: number;
  ownedItems: Set<string>;
  unlockedTitles: TitleInfo[];
  formatMoney: (n: number) => string;
  onReset: () => void;
}

export function EndingScreen({
  nickname,
  totalSpent,
  ownedItems,
  unlockedTitles,
  formatMoney,
  onReset,
}: Props) {
  const allBought = ownedItems.size === SHOP_ITEMS.length;

  return (
    <div className="screen ending-screen">
      <div className="ending-emoji">{allBought ? "👑" : "💸"}</div>
      <h1 className="ending-title">
        {allBought ? "천조 완전 탕진!" : "천조 탕진 완료!"}
      </h1>
      <p className="ending-sub">
        {allBought
          ? "당신은 존재하는 모든 것을 사버렸습니다"
          : "아무 의미 없지만 기분은 좀 좋았다"}
      </p>

      <div className="ending-stats">
        <div className="ending-stat-row">
          <span>닉네임</span>
          <span>{nickname}</span>
        </div>
        <div className="ending-stat-row">
          <span>총 소비</span>
          <span>{formatMoney(totalSpent)}</span>
        </div>
        <div className="ending-stat-row">
          <span>구매 아이템</span>
          <span>{ownedItems.size} / {SHOP_ITEMS.length}</span>
        </div>
        <div className="ending-stat-row">
          <span>해금 칭호</span>
          <span>{unlockedTitles.length}개</span>
        </div>
        <div className="ending-stat-row highlight">
          <span>한마디</span>
          <span>{getStatMessage(totalSpent)}</span>
        </div>
      </div>

      {unlockedTitles.length > 0 && (
        <div className="ending-titles">
          {unlockedTitles.map((t) => (
            <span key={t.id} className="ending-title-badge">{t.name}</span>
          ))}
        </div>
      )}

      <button className="btn-start" onClick={onReset}>
        다시 탕진하기 🔄
      </button>
    </div>
  );
}
