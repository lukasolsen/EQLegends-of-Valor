import { Dispatch } from "redux";
import { addLog } from "../../../store/actions/gameActions";
import { Messages } from "../../utils/messages";
import { generateRandomNumber } from "../../utils/randomUtils";
import { damageEnemy } from "../../../store/actions/enemyActions";

interface IActionSettings {
  move: IMove;
  item?: IItem;
  dispatch: Dispatch;
}

const handlePlayerAttack = (settings: IActionSettings) => {
  const move: IMove = settings.move;

  const dmg = generateRandomNumber(1, move.damage);
  const logPreset: LogT = {
    message: `${Messages.YOU_HIT_ENEMY} ${dmg} damage!`,
    color: "red",
  };

  settings.dispatch(addLog(logPreset));
  settings.dispatch(damageEnemy(dmg));
};

export default handlePlayerAttack;
