import { Dispatch } from "redux";
import handleEnemyAttack from "../combat/enemyAttack";
import handlePlayerAttack from "../combat/playerAttack";

type ObjectAttacked = "Player" | "Enemy";

interface AttackerProps {
  move: IMove;
  dispatch: Dispatch;
  attacker: ObjectAttacked;
}

const AttackAction = ({ move, attacker, dispatch }: AttackerProps) => {
  if (attacker === "Player") {
    console.log("Player attacks");
    handlePlayerAttack({ dispatch, move });
  } else {
    console.log("Enemy attacks");
    handleEnemyAttack({ dispatch, move });
  }
};

export default AttackAction;
