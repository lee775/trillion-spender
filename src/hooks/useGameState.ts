import { useState, useCallback, useMemo } from "react";
import {
  SHOP_ITEMS,
  HIDDEN_TITLES,
  LUXURY_LEVELS,
  PURCHASE_COMMENTS,
  INITIAL_MONEY,
} from "../data/items";
import type { ShopItem, Category } from "../data/items";

export type Screen = "title" | "shop" | "collection" | "ending";

export interface GameState {
  money: number;
  totalSpent: number;
  ownedItems: Set<string>;
  nickname: string;
  screen: Screen;
  selectedCategory: Category | null;
  lastComment: string;
  showPurchaseEffect: boolean;
}

export function useGameState() {
  const [money, setMoney] = useState(INITIAL_MONEY);
  const [totalSpent, setTotalSpent] = useState(0);
  const [ownedItems, setOwnedItems] = useState<Set<string>>(new Set());
  const [nickname, setNickname] = useState("");
  const [screen, setScreen] = useState<Screen>("title");
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [lastComment, setLastComment] = useState("");
  const [showPurchaseEffect, setShowPurchaseEffect] = useState(false);

  // 사치 레벨 계산
  const luxuryLevel = useMemo(() => {
    let level = 0;
    for (const l of LUXURY_LEVELS) {
      if (totalSpent >= l.threshold) level = l.level;
    }
    return level;
  }, [totalSpent]);

  const luxuryInfo = useMemo(
    () => LUXURY_LEVELS[luxuryLevel],
    [luxuryLevel]
  );

  // 구매 가능한 아이템 (사치 레벨 이하)
  const availableItems = useMemo(() => {
    return SHOP_ITEMS.filter((item) => item.luxuryLevel <= luxuryLevel);
  }, [luxuryLevel]);

  // 카테고리별 수집률
  const collectionRates = useMemo(() => {
    const rates: Record<string, { owned: number; total: number; rate: number }> = {};
    const categories = [...new Set(SHOP_ITEMS.map((i) => i.category))];
    for (const cat of categories) {
      const catItems = SHOP_ITEMS.filter((i) => i.category === cat);
      const owned = catItems.filter((i) => ownedItems.has(i.id)).length;
      rates[cat] = {
        owned,
        total: catItems.length,
        rate: Math.round((owned / catItems.length) * 100),
      };
    }
    return rates;
  }, [ownedItems]);

  // 해금된 칭호
  const unlockedTitles = useMemo(() => {
    return HIDDEN_TITLES.filter((title) => {
      if (title.id === "t06") {
        return ownedItems.size === SHOP_ITEMS.length;
      }
      return title.requiredItems.every((id) => ownedItems.has(id));
    });
  }, [ownedItems]);

  // 구매 처리
  const purchaseItem = useCallback(
    (item: ShopItem) => {
      if (money < item.price || ownedItems.has(item.id)) return false;

      setMoney((prev) => prev - item.price);
      setTotalSpent((prev) => prev + item.price);
      setOwnedItems((prev) => new Set(prev).add(item.id));
      setLastComment(
        PURCHASE_COMMENTS[Math.floor(Math.random() * PURCHASE_COMMENTS.length)]
      );
      setShowPurchaseEffect(true);
      setTimeout(() => setShowPurchaseEffect(false), 1500);

      // 돈 다 썼으면 엔딩
      if (money - item.price <= 0) {
        setTimeout(() => setScreen("ending"), 2000);
      }

      return true;
    },
    [money, ownedItems]
  );

  // 게임 시작
  const startGame = useCallback((name: string) => {
    setNickname(name || "익명의 탕진러");
    setScreen("shop");
  }, []);

  // 게임 리셋
  const resetGame = useCallback(() => {
    setMoney(INITIAL_MONEY);
    setTotalSpent(0);
    setOwnedItems(new Set());
    setNickname("");
    setScreen("title");
    setSelectedCategory(null);
    setLastComment("");
  }, []);

  // 포맷 유틸
  const formatMoney = useCallback((amount: number): string => {
    if (amount >= 1_000_000_000_000) {
      return `${(amount / 1_000_000_000_000).toFixed(1)}조`;
    }
    if (amount >= 100_000_000) {
      return `${(amount / 100_000_000).toFixed(1)}억`;
    }
    if (amount >= 10_000) {
      return `${(amount / 10_000).toFixed(0)}만`;
    }
    return `${amount}`;
  }, []);

  return {
    money,
    totalSpent,
    ownedItems,
    nickname,
    screen,
    selectedCategory,
    lastComment,
    showPurchaseEffect,
    luxuryLevel,
    luxuryInfo,
    availableItems,
    collectionRates,
    unlockedTitles,
    purchaseItem,
    startGame,
    resetGame,
    formatMoney,
    setScreen,
    setSelectedCategory,
  };
}
