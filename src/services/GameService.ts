import { useDispatch, useSelector } from "react-redux";
import {
  changeEnemyDefense,
  damageEnemy,
} from "../data/store/enemy/enemyActions";
import { Action } from "redux";
import {
  damagePlayer,
  healPlayer,
  updatePlayerDefense,
  updatePlayerItems,
} from "../data/store/player/playerActions";
import { addLog } from "../data/store/game/gameActions";

type ActionT = {
  type: "ATTACK" | "DEFEND" | "HEAL" | "USE_ITEM";
  move?: IMove;
  item?: any;
  player: IPlayerState;
};

export const useActionDispatcher = () => {
  const dispatch = useDispatch();
  const enemy = useSelector((state: IState) => state.enemy);

  const DoAction = (action: ActionT) => {
    switch (action.type) {
      case "ATTACK":
        return hit(action.move, dispatch, enemy);

      case "DEFEND":
        return defend(action.move, action.player, dispatch);

      case "HEAL":
        return heal(action.move, action.player, dispatch);
      case "USE_ITEM":
        return useItem(action.item, action.player, dispatch);

      default:
        throw new Error(`Unknown action type: ${action.type}`);
    }
  };

  return { DoAction };
};

// Separate functions for each action
const hit = (
  move: IMove,
  dispatch: (action: Action) => void,
  enemy: EnemyState
) => {
  if (move.damage === undefined) {
    throw new Error("Move does not have a damage property!");
  }

  const isCriticalHit = move.criticalHitChance
    ? Math.random() < move.criticalHitChance
    : false;
  console.log(enemy.defense);
  const damage =
    (isCriticalHit ? move.damage * 2 : move.damage) -
    (enemy.defense > 0 ? enemy.defense : 0);

  // Remove the enemy's defense that the player's attack does
  // You can update the enemy's defense in the state
  if (enemy.defense > 0)
    dispatch(changeEnemyDefense(enemy.defense - move.damage));
  console.log(enemy.defense - move.damage);

  // Apply the damage to the enemy
  dispatch(damageEnemy(damage));
  dispatch(addLog({ message: "You hit the enemy " + damage + " damage!" }));

  // Make the enemy attack the player
  // You can use the damageEnemy action to apply the damage to the player
  // You can use the addLog action to add a log message
  const generateRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  console.log(enemy.damage);
  const dmg = generateRandomNumber(1, enemy.damage);
  dispatch(addLog({ message: "The enemy hit you " + dmg + " damage!" }));
  dispatch(damagePlayer(dmg));
};

const defend = (
  move: IMove,
  player: IPlayerState,
  dispatch: (action: Action) => void
) => {
  if (move.defense === undefined) {
    throw new Error("Move does not have a defense property!");
  }

  const newDefense = player.defense + move.defense;
  // Apply the defense bonus to the player
  // You can update the player's defense in the state
  dispatch(updatePlayerDefense(newDefense));
};

const heal = (
  move: IMove,
  player: IPlayerState,
  dispatch: (action: Action) => void
) => {
  const healingAmount = move.healingAmount;
  dispatch(healPlayer(healingAmount, player));
};

const useItem = (
  item: IItem,
  player: IPlayerState,
  dispatch: (action: Action) => void
) => {
  if (!item) {
    console.warn("No item was passed to the useItem function!");
  }

  // Apply all effects of the item
  // You can use the healPlayer action to heal the player
  if (item.healingAmount) {
    dispatch(healPlayer(item.healingAmount));
  }

  if (item.defenseBonus) {
    const newDefense = player.defense + item.defenseBonus;
    dispatch(updatePlayerDefense(newDefense));
  }

  // Remove the item from the player's inventory
  // You can use the updatePlayerItems action to update the player's items
  const newItems = player.items.filter((i) => i.name !== item.name);
  dispatch(updatePlayerItems(newItems));
};
