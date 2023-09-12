import { Dispatch } from "react";

export const damagePlayer = (damage: number) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: "DAMAGE_PLAYER", payload: { damage } });
  };
};

export const healPlayer = (healAmount: number) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: "HEAL_PLAYER", payload: { healingAmount: healAmount } });
  };
};

export const updatePlayerDefense = (newDefense: number) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: "UPDATE_PLAYER_DEFENSE", payload: { newDefense } });
  };
};

export const updatePlayerExperience = (newExperience: number) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: "UPDATE_PLAYER_EXPERIENCE", payload: { newExperience } });
  };
};

export const updatePlayerGold = (newGold: number) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: "UPDATE_PLAYER_GOLD", payload: { newGold } });
  };
};

export const updatePlayerItems = (newItems: any[]) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: "UPDATE_PLAYER_ITEMS", payload: { newItems } });
  };
};

export const updatePlayerMaxHealth = (newMaxHealth: number) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: "UPDATE_PLAYER_MAX_HEALTH", payload: { newMaxHealth } });
  };
};

export const updatePlayerName = (newName: string) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: "UPDATE_PLAYER_NAME", payload: { newName } });
  };
};

export const updatePlayerDamage = (newDamage: number) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: "UPDATE_PLAYER_DAMAGE", payload: { newDamage } });
  };
};

export const updatePlayerLevel = (newLevel: number) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: "UPDATE_PLAYER_LEVEL", payload: { newLevel } });
  };
};

export const updatePlayerMaxLevel = (newMaxLevel: number) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: "UPDATE_PLAYER_MAX_LEVEL", payload: { newMaxLevel } });
  };
};

export const updatePlayerDescription = (newDescription: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: "UPDATE_PLAYER_DESCRIPTION",
      payload: { newDescription },
    });
  };
};
