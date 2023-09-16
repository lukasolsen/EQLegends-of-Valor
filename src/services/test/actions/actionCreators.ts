import {
  ActionTypes,
  AttackAction,
  DefendAction,
  HealAction,
  UseItemAction,
} from "../GameService";

export const attack = (move: IMove, player: IPlayerState): AttackAction => ({
  type: ActionTypes.ATTACK,
  move,
  player,
});

export const defend = (move: IMove, player: IPlayerState): DefendAction => ({
  type: ActionTypes.DEFEND,
  move,
  player,
});

export const heal = (move: IMove, player: IPlayerState): HealAction => ({
  type: ActionTypes.HEAL,
  move,
  player,
});

export const useItem = (item: IItem, player: IPlayerState): UseItemAction => ({
  type: ActionTypes.USE_ITEM,
  item,
  player,
});
