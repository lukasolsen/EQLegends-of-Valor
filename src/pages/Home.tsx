import { useState } from "react";
import PlayerInfo from "../components/player/PlayerInfo";
import Inventory from "../components/player/Inventory";
import Log from "../components/player/Log";
import EnemyInfo from "../components/enemy/EnemyInfo";
import Actions from "../components/game/Actions";

function Home() {
  const [playerHealth, setPlayerHealth] = useState(100);
  const [monsterHealth, setMonsterHealth] = useState(50);

  const attackMoves: IMove[] = [
    {
      name: "Slash",
      damage: 20,
      maxLevel: 5,
      unlockedAtLevel: 1,
      unlocked: true,
      description: "A basic slash attack.",
    },
    {
      name: "Fireball",
      damage: 30,
      maxLevel: 5,
      unlockedAtLevel: 3,
      unlocked: false,
      description: "A basic fireball attack.",
    },
    {
      name: "Lightning Bolt",
      damage: 40,
      maxLevel: 5,
      unlockedAtLevel: 5,
      unlocked: false,
      description: "A basic lightning bolt attack.",
    },
  ];
  const defendMoves: IMove[] = [
    {
      name: "Block",
      healAmount: 20,
      maxLevel: 5,
      unlockedAtLevel: 1,
      unlocked: true,
      description: "A basic block.",
    },
    {
      name: "Dodge",
      healAmount: 30,
      maxLevel: 5,
      unlockedAtLevel: 3,
      unlocked: false,
      description: "A basic dodge.",
    },
    {
      name: "Parry",
      healAmount: 40,
      maxLevel: 5,
      unlockedAtLevel: 5,
      unlocked: false,
      description: "A basic parry.",
    },
  ];

  const itemMoves: IMove[] = [
    {
      name: "Health Potion",
      healAmount: 20,
      maxLevel: 5,
      unlockedAtLevel: 1,
      unlocked: true,
      description: "A basic health potion.",
    },
    {
      name: "Mana Potion",
      healAmount: 30,
      maxLevel: 5,
      unlockedAtLevel: 3,
      unlocked: false,
      description: "A basic mana potion.",
    },
    {
      name: "Elixir",
      healAmount: 40,
      maxLevel: 5,
      unlockedAtLevel: 5,
      unlocked: false,
      description: "A basic elixir.",
    },
  ];

  const moves = {
    attack: attackMoves,
    defend: defendMoves,
    items: itemMoves,
  };

  const [inventory, setInventory] = useState([]);
  const [log, setLog] = useState<LogT[]>([]);

  /*const attackMonster = () => {
    const playerDamage = Math.floor(Math.random() * 10) + 1;
    setMonsterHealth(monsterHealth - playerDamage);
    addToLog(`You attacked the monster for ${playerDamage} damage.`);
    monsterAttack();
  };*/

  const monsterAttack = () => {
    const monsterDamage = Math.floor(Math.random() * 10) + 1;
    setPlayerHealth(playerHealth - monsterDamage);
    addToLog(`Monster attacked you for ${monsterDamage} damage.`);
  };

  const doAction = (move: IMove): void => {
    // check if the move is unlocked
    if (!move.unlocked) throw new Error("Move is not unlocked yet.");

    // check if the move is a damage or heal or item

    if (move.healAmount && move.healAmount > 0) {
      // do heal
      setPlayerHealth(playerHealth + move.healAmount);
      addToLog(`You healed for ${move.healAmount} HP.`);
      monsterAttack();
    } else if (move.damage && move.damage > 0) {
      // do damage
      setMonsterHealth(monsterHealth - move.damage);
      addToLog(`You attacked the monster for ${move.damage} damage.`);
      monsterAttack();
    }
  };

  const pickUpItem = () => {
    const newItem = {
      name: "Health Potion",
      healAmount: 20,
    };
    setInventory([...inventory, newItem]);
    addToLog(`You picked up a Health Potion.`);
  };

  const useItem = (item) => {
    if (item.healAmount) {
      setPlayerHealth(playerHealth + item.healAmount);
      setInventory(inventory.filter((i) => i !== item));
      addToLog(`You used a Health Potion and gained ${item.healAmount} HP.`);
    }
  };

  const addToLog = (message: string, color?: string) => {
    setLog([{ message, color }, ...log]);
  };

  return (
    <>
      <div className="flex-1 flex flex-col sm:flex-row">
        {/* Sidebar */}
        <div className="w-full sm:w-1/4 p-4 border-r">
          <div className="mb-4">
            <PlayerInfo playerHealth={playerHealth} />
            <Inventory inventory={inventory} useItem={useItem} />
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Log</h2>
            <Log logs={log} />
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={pickUpItem}
          >
            Pick Up Item
          </button>
        </div>
        {/* Game Content */}
        <div className="w-full sm:w-3/4 p-4">
          <EnemyInfo
            enemyName="Monster"
            enemyHealth={monsterHealth}
            isPlayerTurn={true}
            monsterImageSrc="https://e7.pngegg.com/pngimages/511/146/png-clipart-world-of-warcraft-legion-drawing-monster-monster-world-cartoon.png"
          />
        </div>
      </div>

      <Actions doAction={doAction} moves={moves} />
    </>
  );
}

export default Home;
