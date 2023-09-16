export const damagePlayer = (damage: number) => ({
  type: "DAMAGE_PLAYER",
  payload: { damage },
});

export const healPlayer = (healAmount: number) => ({
  type: "HEAL_PLAYER",
  payload: { healingAmount: healAmount },
});

export const updatePlayerDefense = (newDefense: number) => ({
  type: "UPDATE_PLAYER_DEFENSE",
  payload: { newDefense },
});

export const updatePlayerExperience = (newExperience: number) => ({
  type: "UPDATE_PLAYER_EXPERIENCE",
  payload: { newExperience },
});

export const updatePlayerGold = (newGold: number) => ({
  type: "UPDATE_PLAYER_GOLD",
  payload: { newGold },
});

//TODO: Add type for newItems
export const updatePlayerItems = (newItems: any[]) => ({
  type: "UPDATE_PLAYER_ITEMS",
  payload: { newItems },
});

export const updatePlayerMaxHealth = (newMaxHealth: number) => ({
  type: "UPDATE_PLAYER_MAX_HEALTH",
  payload: { newMaxHealth },
});

export const updatePlayerName = (newName: string) => ({
  type: "UPDATE_PLAYER_NAME",
  payload: { newName },
});

export const updatePlayerDamage = (newDamage: number) => ({
  type: "UPDATE_PLAYER_DAMAGE",
  payload: { newDamage },
});

export const updatePlayerLevel = (newLevel: number) => ({
  type: "UPDATE_PLAYER_LEVEL",
  payload: { newLevel },
});

export const updatePlayerMaxLevel = (newMaxLevel: number) => ({
  type: "UPDATE_PLAYER_MAX_LEVEL",
  payload: { newMaxLevel },
});

export const updatePlayerDescription = (newDescription: string) => ({
  type: "UPDATE_PLAYER_DESCRIPTION",
  payload: { newDescription },
});
