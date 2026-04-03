import { useGameState } from "./hooks/useGameState";
import { TitleScreen } from "./components/TitleScreen";
import { TopBar } from "./components/TopBar";
import { Shop } from "./components/Shop";
import { Collection } from "./components/Collection";
import { EndingScreen } from "./components/EndingScreen";
import { SHOP_ITEMS } from "./data/items";

function App() {
  const game = useGameState();

  if (game.screen === "title") {
    return <TitleScreen onStart={game.startGame} />;
  }

  if (game.screen === "ending") {
    return (
      <EndingScreen
        nickname={game.nickname}
        totalSpent={game.totalSpent}
        ownedItems={game.ownedItems}
        unlockedTitles={game.unlockedTitles}
        formatMoney={game.formatMoney}
        onReset={game.resetGame}
      />
    );
  }

  return (
    <div className="app">
      <TopBar
        money={game.money}
        totalSpent={game.totalSpent}
        nickname={game.nickname}
        luxuryEmoji={game.luxuryInfo.emoji}
        luxuryName={game.luxuryInfo.name}
        luxuryLevel={game.luxuryLevel}
        formatMoney={game.formatMoney}
        screen={game.screen}
        setScreen={game.setScreen}
      />
      <div className="main-content">
        {game.screen === "shop" && (
          <Shop
            items={SHOP_ITEMS}
            ownedItems={game.ownedItems}
            money={game.money}
            selectedCategory={game.selectedCategory}
            setSelectedCategory={game.setSelectedCategory}
            onPurchase={game.purchaseItem}
            formatMoney={game.formatMoney}
            lastComment={game.lastComment}
            showPurchaseEffect={game.showPurchaseEffect}
            luxuryLevel={game.luxuryLevel}
          />
        )}
        {game.screen === "collection" && (
          <Collection
            ownedItems={game.ownedItems}
            collectionRates={game.collectionRates}
            unlockedTitles={game.unlockedTitles}
            totalSpent={game.totalSpent}
            formatMoney={game.formatMoney}
          />
        )}
      </div>
    </div>
  );
}

export default App;
