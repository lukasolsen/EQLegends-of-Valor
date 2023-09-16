// actionTypes.ts


// actions.ts
import { Action } from "redux";

export interface BaseAction extends Action {
  type: ActionTypes;
}

export interface AttackAction extends BaseAction {
  type: ActionTypes.ATTACK;
  move: IMove;
  player: IPlayerState;
}

export interface DefendAction extends BaseAction {
  type: ActionTypes.DEFEND;
  move: IMove;
  player: IPlayerState;
}

export interface HealAction extends BaseAction {
  type: ActionTypes.HEAL;
  move: IMove;
  player: IPlayerState;
}

export interface UseItemAction extends BaseAction {
  type: ActionTypes.USE_ITEM;
  item: IItem;
  player: IPlayerState;
}

export type GameAction =
  | AttackAction
  | DefendAction
  | HealAction
  | UseItemAction;
