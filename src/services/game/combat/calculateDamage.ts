import { IEnemyState } from "../../../store/reducers/enemyReducer";

/**
 * Calculates the damage of a move against an enemy.
 * @param move
 * @param enemy 
 * @returns The damage of the move against the enemy.
 */
export const calculateDamage = (move: IMove, enemy: IEnemyState): number => {
  if (move.damage === undefined) {
    throw new Error("Move does not have a damage property!");
  }

  const isCriticalHit = move.criticalHitChance
    ? Math.random() < move.criticalHitChance
    : false;

  const damage =
    (isCriticalHit ? move.damage * 2 : move.damage) -
    Math.max(enemy.defense, 0);

  return damage;
};
