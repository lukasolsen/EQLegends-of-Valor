import { useState } from "react";
import { useSelector } from "react-redux";
import Actions from "./Actions";
import Inventory from "./Inventory";

const PlayerInfo = () => {
  const playerHealth = useSelector((state: IState) => state.player.health);
  const playerName = useSelector((state: IState) => state.player.name);

  const [tab, setTab] = useState("actions");

  return (
    <>
      <h2 className="text-lg font-semibold mb-2">{playerName}</h2>
      <p className="text-gray-600">Health: {playerHealth}</p>
      <div className="flex flex-row justify-evenly items-center mt-4">
        <div className="w-1/2 flex justify-center">
          <button
            className={`border border-gray-600 p-2 rounded-md text-white ${
              tab === "actions" && "border-blue-600"
            }`}
            onClick={() => {
              setTab("actions");
            }}
          >
            Actions
          </button>
        </div>
        <div className="w-1/2 flex justify-center">
          <button
            className={`border border-gray-600 p-2 rounded-md text-white ${
              tab === "inventory" && "border-blue-600"
            }`}
            onClick={() => {
              setTab("inventory");
            }}
          >
            Inventory
          </button>
        </div>
      </div>
      <div className="mt-4">
        {tab === "actions" && <Actions />}
        {tab === "inventory" && <Inventory />}
      </div>
    </>
  );
};

export default PlayerInfo;
