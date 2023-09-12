import { useState } from "react";
import PlayerInfo from "../components/player/PlayerInfo";
import Inventory from "../components/player/Inventory";
import Log from "../components/player/Log";
import EnemyInfo from "../components/enemy/EnemyInfo";
import Actions from "../components/game/Actions";
import { useDispatch } from "react-redux";
import { addLog } from "../data/store/game/gameActions";
import { DoAction } from "../services/GameService";

function Home() {
  const [playerHealth, setPlayerHealth] = useState(100);
  const [monsterHealth, setMonsterHealth] = useState(50);
  const dispatch = useDispatch();

  const [inventory, setInventory] = useState([]);

  /*const attackMonster = () => {
    const playerDamage = Math.floor(Math.random() * 10) + 1;
    setMonsterHealth(monsterHealth - playerDamage);
    addToLog(`You attacked the monster for ${playerDamage} damage.`);
    monsterAttack();
  };*/

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
    dispatch(addLog({ message, color }));
  };

  return (
    <>
      <div className="flex-1 flex flex-col sm:flex-row">
        {/* Sidebar */}
        <div className="w-full sm:w-1/4 p-4 border-r flex flex-col justify-between">
          <div className="mb-4">
            <PlayerInfo />
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Log</h2>
            <Log />
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
          <EnemyInfo />
        </div>
      </div>

      <Actions />
    </>
  );
}

export default Home;
