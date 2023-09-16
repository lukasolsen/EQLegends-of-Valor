import { Dispatch } from "redux";
import { IEnemyState } from "../../../store/reducers/enemyReducer";

export const handleEnemyAttack = (enemy: IEnemyState, dispatch: Dispatch) => {
  const dmg = generateRandomNumber(1, enemy.damage);
  dispatch(addLog({ message: `${Messages.ENEMY_HIT_YOU} ${dmg} damage!` }));
  dispatch(damagePlayer(dmg));
  if (enemy.health - dmg <= 0) {
    dispatch(endGame());
  }
};

export const generateRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
