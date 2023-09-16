/* eslint-disable no-case-declarations */
import { useDispatch, useSelector } from "react-redux";
import { attack, defend, heal, useItem } from "./actions";
import { calculateDamage, handleEnemyAttack } from "./combat";
import { Messages } from "./messages";
import { ActionTypes, GameAction } from "./GameService";
import { addLog } from "store/game/gameActions";
import { damageEnemy } from "store/enemy/enemyActions";

export const useActionDispatcher = () => {
  const dispatch = useDispatch();
  const enemy = useSelector((state: IState) => state.enemy);

  const DoAction = (action: GameAction) => {
    switch (action.type) {
      case ActionTypes.ATTACK:
        const damage = calculateDamage(action.move, enemy);
        dispatch(addLog(`${Messages.YOU_HIT_ENEMY} ${damage} damage!`));
        dispatch(damageEnemy(damage));
        handleEnemyAttack(enemy, dispatch);
        break;

      case ActionTypes.DEFEND:
        // Implement defend logic
        break;

      case ActionTypes.HEAL:
        // Implement heal logic
        break;

      case ActionTypes.USE_ITEM:
        // Implement use item logic
        break;

      default:
        throw new Error(`Unknown action type: ${action.type}`);
    }
  };

  return { DoAction };
};
