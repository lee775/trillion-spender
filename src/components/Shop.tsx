import { CATEGORIES, CATEGORY_EMOJI } from "../data/items";
import type { ShopItem, Category } from "../data/items";

interface Props {
  items: ShopItem[];
  ownedItems: Set<string>;
  money: number;
  selectedCategory: Category | null;
  setSelectedCategory: (c: Category | null) => void;
  onPurchase: (item: ShopItem) => boolean;
  formatMoney: (n: number) => string;
  lastComment: string;
  showPurchaseEffect: boolean;
  luxuryLevel: number;
}

export function Shop({
  items,
  ownedItems,
  money,
  selectedCategory,
  setSelectedCategory,
  onPurchase,
  formatMoney,
  lastComment,
  showPurchaseEffect,
  luxuryLevel,
}: Props) {
  const filteredItems = selectedCategory
    ? items.filter((i) => i.category === selectedCategory)
    : items;

  return (
    <div className="shop">
      {/* 구매 코멘트 */}
      <div className={`purchase-comment ${showPurchaseEffect ? "show" : ""}`}>
        {lastComment}
      </div>

      {/* 카테고리 탭 */}
      <div className="category-tabs">
        <button
          className={`cat-btn ${!selectedCategory ? "active" : ""}`}
          onClick={() => setSelectedCategory(null)}
        >
          전체
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`cat-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {CATEGORY_EMOJI[cat]} {cat}
          </button>
        ))}
      </div>

      {/* 아이템 그리드 */}
      <div className="item-grid">
        {filteredItems.map((item) => {
          const owned = ownedItems.has(item.id);
          const canAfford = money >= item.price;
          const locked = item.luxuryLevel > luxuryLevel;

          return (
            <div
              key={item.id}
              className={`item-card ${owned ? "owned" : ""} ${locked ? "locked" : ""} ${!canAfford && !owned ? "expensive" : ""}`}
            >
              <div className="item-emoji">{locked ? "🔒" : item.emoji}</div>
              <div className="item-name">{locked ? "???" : item.name}</div>
              <div className="item-price">
                {locked ? `Lv.${item.luxuryLevel} 해금` : formatMoney(item.price)}
              </div>
              <div className="item-desc">
                {locked ? `사치 레벨 ${item.luxuryLevel} 필요` : item.description}
              </div>
              {!locked && (
                <button
                  className={`btn-buy ${owned ? "sold" : ""}`}
                  disabled={owned || !canAfford}
                  onClick={() => onPurchase(item)}
                >
                  {owned ? "보유중 ✓" : !canAfford ? "돈 부족" : "구매! 💸"}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
