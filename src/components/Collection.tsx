import { SHOP_ITEMS, CATEGORY_EMOJI } from "../data/items";
import type { Category } from "../data/items";
import { getStatMessage } from "../data/items";

interface TitleInfo {
  id: string;
  name: string;
  description: string;
}

interface Props {
  ownedItems: Set<string>;
  collectionRates: Record<string, { owned: number; total: number; rate: number }>;
  unlockedTitles: TitleInfo[];
  totalSpent: number;
  formatMoney: (n: number) => string;
}

export function Collection({
  ownedItems,
  collectionRates,
  unlockedTitles,
  totalSpent,
  formatMoney,
}: Props) {
  return (
    <div className="collection">
      {/* 통계 */}
      <div className="stat-banner">
        <div className="stat-spent">총 소비: {formatMoney(totalSpent)}</div>
        <div className="stat-msg">{getStatMessage(totalSpent)}</div>
        <div className="stat-count">보유 아이템: {ownedItems.size} / {SHOP_ITEMS.length}</div>
      </div>

      {/* 카테고리별 수집률 */}
      <div className="collection-rates">
        {Object.entries(collectionRates).map(([cat, info]) => (
          <div key={cat} className="rate-card">
            <span className="rate-emoji">{CATEGORY_EMOJI[cat as Category]}</span>
            <span className="rate-name">{cat}</span>
            <div className="rate-bar-wrap">
              <div className="rate-bar" style={{ width: `${info.rate}%` }} />
            </div>
            <span className="rate-text">{info.owned}/{info.total} ({info.rate}%)</span>
          </div>
        ))}
      </div>

      {/* 칭호 */}
      <div className="titles-section">
        <h3>🏆 해금된 칭호</h3>
        {unlockedTitles.length === 0 ? (
          <p className="no-titles">아직 해금된 칭호가 없습니다. 조합을 모아보세요!</p>
        ) : (
          <div className="titles-list">
            {unlockedTitles.map((t) => (
              <div key={t.id} className="title-card">
                <div className="title-name">{t.name}</div>
                <div className="title-desc">{t.description}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 보유 아이템 */}
      <div className="owned-section">
        <h3>📦 보유 아이템</h3>
        <div className="owned-grid">
          {SHOP_ITEMS.filter((i) => ownedItems.has(i.id)).map((item) => (
            <div key={item.id} className="owned-card">
              <span className="owned-emoji">{item.emoji}</span>
              <span className="owned-name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
