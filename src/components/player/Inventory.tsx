import { useSelector } from "react-redux";
import { ActionTypes, useActionDispatcher } from "../../services";

const Inventory = () => {
  const inventory = useSelector((state: IState) => state.player.items);
  const player = useSelector((state: IState) => state.player);
  const doAction = useActionDispatcher();

  return (
    <div className="grid grid-rows-3">
      {inventory.map((item: IItem, index: number) => (
        <div
          key={index}
          className="border border-gray-600 p-2 rounded-md text-white"
          onClick={() =>
            doAction.doAction(ActionTypes.USE_ITEM, {
              item: item,
              player: player,
            })
          }
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Inventory;
