import { Dispatch } from "redux";

// Define action types
export const ENEMY_DAMAGE = "ENEMY_DAMAGE";
export const ENEMY_HEAL = "ENEMY_HEAL";
export const ENEMY_LEVEL_UP = "ENEMY_LEVEL_UP";
export const ENEMY_RESET = "ENEMY_RESET";
export const ENEMY_UNLOCK = "ENEMY_UNLOCK";
export const ENEMY_LOCK = "ENEMY_LOCK";
export const ENEMY_SET_LEVEL = "ENEMY_SET_LEVEL";
export const CHANGE_ENEMY_NAME = "CHANGE_ENEMY_NAME";
export const CHANGE_ENEMY_DESCRIPTION = "CHANGE_ENEMY_DESCRIPTION";
export const CHANGE_ENEMY_DAMAGE = "CHANGE_ENEMY_DAMAGE";
export const CHANGE_ENEMY_DEFENSE = "CHANGE_ENEMY_DEFENSE";
export const CHANGE_ENEMY_MAX_HEALTH = "CHANGE_ENEMY_MAX_HEALTH";
export const CHANGE_ENEMY_IMAGE = "CHANGE_ENEMY_IMAGE";
export const CHANGE_ENEMY_GOLD = "CHANGE_ENEMY_GOLD";
export const CHANGE_ENEMY_EXPERIENCE = "CHANGE_ENEMY_EXPERIENCE";
export const CHANGE_ENEMY_DROPS = "CHANGE_ENEMY_DROPS";

// Action creators
export const damageEnemy = (damage: number) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: ENEMY_DAMAGE, payload: { damage } });
  };
};

export const healEnemy = (healAmount: number) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: ENEMY_HEAL, payload: { healAmount } });
  };
};

export const levelUpEnemy = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: ENEMY_LEVEL_UP });
  };
};

export const resetEnemy = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: ENEMY_RESET });
  };
};

export const unlockEnemy = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: ENEMY_UNLOCK });
  };
};

export const lockEnemy = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: ENEMY_LOCK });
  };
};

export const setEnemyLevel = (level: number) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: ENEMY_SET_LEVEL, payload: { level } });
  };
};

export const changeEnemyName = (newName: string) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: CHANGE_ENEMY_NAME, payload: { newName } });
  };
};

export const changeEnemyDescription = (newDescription: string) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: CHANGE_ENEMY_DESCRIPTION, payload: { newDescription } });
  };
};

export const changeEnemyDamage = (newDamage: number) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: CHANGE_ENEMY_DAMAGE, payload: { newDamage } });
  };
};

export const changeEnemyDefense = (newDefense: number) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: CHANGE_ENEMY_DEFENSE, payload: { newDefense } });
  };
};

export const changeEnemyMaxHealth = (newMaxHealth: number) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: CHANGE_ENEMY_MAX_HEALTH, payload: { newMaxHealth } });
  };
};

export const changeEnemyImage = (newImage: string) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: CHANGE_ENEMY_IMAGE, payload: { newImage } });
  };
};

export const changeEnemyGold = (newGold: number) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: CHANGE_ENEMY_GOLD, payload: { newGold } });
  };
};

export const changeEnemyExperience = (newExperience: number) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: CHANGE_ENEMY_EXPERIENCE, payload: { newExperience } });
  };
};

export const changeEnemyDrops = (newDrops: string[]) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: CHANGE_ENEMY_DROPS, payload: { newDrops } });
  };
};
