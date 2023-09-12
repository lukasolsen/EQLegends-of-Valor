import { useSelector } from "react-redux";
import { useActionDispatcher } from "../../services/GameService";

const Inventory = () => {
  const inventory = useSelector((state: IState) => state.player.items);
  const player = useSelector((state: IState) => state.player);
  const doAction = useActionDispatcher();

  return (
    <div className="grid grid-rows-3">
      {inventory.map((item, index) => (
        <div
          key={index}
          className="border border-gray-600 p-2 rounded-md text-white"
          onClick={() => doAction.DoAction({ type: "USE_ITEM", item, player })}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Inventory;
