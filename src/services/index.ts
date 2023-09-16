import { useDispatch } from "react-redux";
import AttackAction from "./game/actions/attack";

export enum ActionTypes {
  ATTACK = "ATTACK",
  DEFEND = "DEFEND",
  HEAL = "HEAL",
  USE_ITEM = "USE_ITEM",
}

interface IActionSettings {
  move?: IMove;
  item?: IItem;
}

const useActionDispatcher = () => {
  const dispatch = useDispatch();

  // Make it be able to use all kinds of argments if needed
  const doAction = (action: ActionTypes, settings: IActionSettings) => {
    switch (action) {
      case ActionTypes.ATTACK:
        if (!settings.move) {
          throw new Error("Move not found");
        }

        AttackAction({
          move: settings.move,
          attacker: "Player",
          dispatch: dispatch,
        });
        break;
      case ActionTypes.DEFEND:
        return "defend";
      case ActionTypes.HEAL:
        return "heal";
      case ActionTypes.USE_ITEM:
        return "use item";
      default:
        return "default";
    }
  };

  return { doAction };
};

export { useActionDispatcher };
