import React, { useRef, useState } from "react";

type LogT = {
  message: string;
  color?: string;
};

interface IMove {
  name: string;
  damage?: number;
  healAmount?: number;
  unlocked?: boolean;
  unlockedAtLevel?: number;
  maxLevel?: number;
  level?: number;
  description: string;
}

function App() {
  const [playerHealth, setPlayerHealth] = useState(100);
  const [monsterHealth, setMonsterHealth] = useState(50);

  const [popup, setPopup] = useState(false);
  const [popupCategory, setPopupCategory] = useState("");
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });

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

  const buttonRefs = {};

  const showPopup = (category: string, buttonRef: HTMLButtonElement) => {
    console.log(buttonRef.getBoundingClientRect());
    const buttonRect = buttonRef.getBoundingClientRect();
    setPopupCategory(category);
    setPopupPosition({
      top: buttonRect.top - 10,
      left: buttonRect.left + buttonRect.width / 2,
    });
    setPopup(true);
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

  const doAction = (move: IMove) => {
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
    <div className="flex flex-col h-screen bg-slate-200 dark:bg-gray-900 dark:text-white">
      <h1 className="text-2xl font-semibold p-4 bg-blue-500 text-white dark:bg-gray-800 dark:text-gray-200">
        RPG Game
      </h1>
      <div className="flex-1 flex flex-col sm:flex-row">
        {/* Sidebar */}
        <div className="w-full sm:w-1/4 p-4 border-r">
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Player</h2>
            <p className="text-gray-600">Health: {playerHealth}</p>
            <p className="text-gray-600">Inventory:</p>
            <ul>
              {inventory.map((item, index) => (
                <li key={index}>
                  {item.name} -{" "}
                  <button
                    className="text-blue-500 underline"
                    onClick={() => useItem(item)}
                  >
                    Use
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Log</h2>
            <ul>
              {log.map((message, index) => (
                <li key={index} className={`text-${message.color ?? "white"}`}>
                  {message.message}
                </li>
              ))}
            </ul>
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
          <h2 className="text-xl font-semibold mb-4">Monster</h2>
          <p className="text-gray-600">Health: {monsterHealth}</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-gray-800 dark:bg-gray-700 text-white p-4">
        <div className="flex justify-around">
          <button
            className="text-blue-500 underline"
            ref={(ref) => {
              // Create a ref to access the button's position
              buttonRefs.attack = ref;
            }}
            onClick={() => showPopup("attack", buttonRefs.attack)}
          >
            Attack
          </button>
          <button
            className="text-green-500 underline"
            ref={(ref) => {
              // Create a ref to access the button's position
              buttonRefs.defend = ref;
            }}
            onClick={() => showPopup("defend", buttonRefs.defend)}
          >
            Defend
          </button>
          <button
            className="text-yellow-500 underline"
            ref={(ref) => {
              // Create a ref to access the button's position
              buttonRefs.items = ref;
            }}
            onClick={() => showPopup("items", buttonRefs.items)}
          >
            Items
          </button>
        </div>
      </div>

      {/* Popups */}
      {popup && (
        <div
          className="fixed bg-white dark:bg-gray-800 p-4 rounded shadow-md w-64"
          style={{
            top: popupPosition.top + "px",
            left: popupPosition.left + "px",
            transform: "translate(-50%, -100%)",
          }}
        >
          <h2 className="text-lg font-semibold mb-4">
            {popupCategory.toUpperCase()} Moves
          </h2>
          <ul className="flex flex-col gap-2">
            {popupCategory === "attack" &&
              moves.attack.map((move: IMove, index: number) => (
                <li key={index}>
                  <button
                    className="flex justify-between hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md cursor-pointer flex-row w-full"
                    onClick={() => {
                      doAction(move);
                      setPopup(false);
                    }}
                  >
                    <span>{move.name}</span>
                    <span>Defense: {move.damage}</span>
                  </button>
                </li>
              ))}
            {popupCategory === "defend" &&
              moves.defend.map((move: IMove, index: number) => (
                <li key={index}>
                  <button
                    className="flex justify-between hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md cursor-pointer flex-row w-full"
                    onClick={() => {
                      doAction(move);
                      setPopup(false);
                    }}
                  >
                    <span>{move.name}</span>
                    <span>Defense: {move.healAmount}</span>
                  </button>
                </li>
              ))}
            {popupCategory === "items" &&
              moves.items.map((move: IMove, index: number) => (
                <li key={index}>
                  <button
                    className="flex justify-between hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md cursor-pointer flex-row w-full"
                    onClick={() => {
                      doAction(move);
                      setPopup(false);
                    }}
                  >
                    <span>{move.name}</span>
                    <span>Defense: {move.healAmount}</span>
                  </button>
                </li>
              ))}
          </ul>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
            onClick={() => setPopup(false)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
