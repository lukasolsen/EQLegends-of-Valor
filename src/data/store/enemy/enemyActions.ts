export const damageEnemy = (state: EnemyState, damage: number) => {
  return {
    ...state,
    health: state.health - damage,
  };
};

export const healEnemy = (state: EnemyState, healAmount: number) => {
  return {
    ...state,
    health: state.health + healAmount,
  };
};

export const levelUpEnemy = (state: EnemyState) => {
  return {
    ...state,
    level: state.level + 1,
  };
};

export const resetEnemy = (state: EnemyState) => {
  return {
    ...state,
    health: state.maxHealth,
  };
};

export const unlockEnemy = (state: EnemyState) => {
  return {
    ...state,
    unlocked: true,
  };
};

export const lockEnemy = (state: EnemyState) => {
  return {
    ...state,
    unlocked: false,
  };
};

export const setEnemyLevel = (state: EnemyState, level: number) => {
  return {
    ...state,
    level,
  };
};

export const changeEnemyName = (state: EnemyState, newName: string) => {
  return {
    ...state,
    name: newName,
  };
};

export const changeEnemyDescription = (state: EnemyState, newDescription: string) => {
  return {
    ...state,
    description: newDescription,
  };
};

export const changeEnemyDamage = (state: EnemyState, newDamage: number) => {
  return {
    ...state,
    damage: newDamage,
  };
};

export const changeEnemyDefense = (state: EnemyState, newDefense: number) => {
  return {
    ...state,
    defense: newDefense,
  };
};

export const changeEnemyMaxHealth = (state: EnemyState, newMaxHealth: number) => {
  return {
    ...state,
    maxHealth: newMaxHealth,
  };
};

export const changeEnemyImage = (state: EnemyState, newImage: string) => {
  return {
    ...state,
    image: newImage,
  };
};

export const changeEnemyGold = (state: EnemyState, newGold: number) => {
  return {
    ...state,
    gold: newGold,
  };
};

export const changeEnemyExperience = (state: EnemyState, newExperience: number) => {
  return {
    ...state,
    experience: newExperience,
  };
};

export const changeEnemyDrops = (state: EnemyState, newDrops: string[]) => {
  return {
    ...state,
    drops: newDrops,
  };
};
