import { Dispatch } from "redux";
import { addLog } from "../../../store/actions/gameActions";
import { damagePlayer } from "../../../store/actions/playerActions";
import { Messages } from "../../utils/messages";
import { generateRandomNumber } from "../../utils/randomUtils";

interface IActionSettings {
  move: IMove;
  item?: IItem;
  dispatch: Dispatch;
}

const handleEnemyAttack = (settings: IActionSettings) => {
  //check if args exist
  const move: IMove = settings.move;

  //TODO: Make move relevant to enemy

  const dmg = generateRandomNumber(1, move.damage);
  const logPreset: LogT = {
    message: `${Messages.ENEMY_HIT_YOU} ${dmg} damage!`,
    color: "red",
  };

  console.log(dmg);

  settings.dispatch(addLog(logPreset));
  settings.dispatch(damagePlayer(dmg));
};

export default handleEnemyAttack;
