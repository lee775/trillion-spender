import type { Screen } from "../hooks/useGameState";

interface Props {
  money: number;
  totalSpent: number;
  nickname: string;
  luxuryEmoji: string;
  luxuryName: string;
  luxuryLevel: number;
  formatMoney: (n: number) => string;
  screen: Screen;
  setScreen: (s: Screen) => void;
}

export function TopBar({
  money,
  nickname,
  luxuryEmoji,
  luxuryName,
  luxuryLevel,
  formatMoney,
  screen,
  setScreen,
}: Props) {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <span className="top-nickname">{luxuryEmoji} {nickname}</span>
        <span className="top-level">Lv.{luxuryLevel} {luxuryName}</span>
      </div>
      <div className="top-bar-center">
        <span className="top-money">💰 {formatMoney(money)}</span>
      </div>
      <div className="top-bar-right">
        <button
          className={`tab-btn ${screen === "shop" ? "active" : ""}`}
          onClick={() => setScreen("shop")}
        >
          🛒 상점
        </button>
        <button
          className={`tab-btn ${screen === "collection" ? "active" : ""}`}
          onClick={() => setScreen("collection")}
        >
          📖 도감
        </button>
      </div>
    </div>
  );
}
