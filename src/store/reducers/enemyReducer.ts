export interface IEnemyState {
  name: string; // Name of the enemy | e.g. "Goblin"
  description: string; // Description of the enemy | e.g. "A small green goblin"
  image: string; // Image of the enemy | e.g. "goblin.png"

  health: number; // Current health of the enemy | e.g. 10
  maxHealth: number; // Max health of the enemy | e.g. 10
  level: number; // Current level of the enemy | e.g. 1
  maxLevel: number; // Max level the enemy can be | e.g. 5

  damage: number; // Damage the enemy does | e.g. 5
  defense: number; // Defense the enemy has | e.g. 5

  experience: number; // Experience the enemy gives | e.g. 10
  gold: number; // Gold the enemy gives | e.g. 10
  drops: string[]; // Items the enemy can drop | e.g. ["potion", "sword"]

  unlocked: boolean; // Whether the enemy is unlocked or not | e.g. true
  unlockedAtLevel: number; // Level the enemy is unlocked at | e.g. 1
}

const initialState: IEnemyState = {
  name: "Slime",
  description: "A slime",
  image:
    "https://e7.pngegg.com/pngimages/511/146/png-clipart-world-of-warcraft-legion-drawing-monster-monster-world-cartoon.png",

  health: 10,
  maxHealth: 10,
  level: 1,
  maxLevel: 10,

  damage: 10,
  defense: 2,

  experience: 10,
  gold: 10,
  drops: ["Slime"],

  unlocked: true,
  unlockedAtLevel: 1,
};

const enemyReducer = (state = initialState, action: IActionRedux) => {
  switch (action.type) {
    // Existing cases
    case "ENEMY_DAMAGE":
      return {
        ...state,
        health: state.health - action.payload.damage,
      };
    case "ENEMY_HEAL":
      return {
        ...state,
        health: state.health + action.payload.healAmount,
      };
    case "ENEMY_LEVEL_UP":
      return {
        ...state,
        level: state.level + 1,
      };
    case "ENEMY_RESET":
      return {
        ...state,
        health: state.maxHealth,
      };
    case "ENEMY_UNLOCK":
      return {
        ...state,
        unlocked: true,
      };
    case "ENEMY_LOCK":
      return {
        ...state,
        unlocked: false,
      };
    case "ENEMY_SET_LEVEL":
      return {
        ...state,
        level: action.payload.level,
      };

    // Additional cases
    case "CHANGE_ENEMY_NAME":
      return {
        ...state,
        name: action.payload.newName,
      };
    case "CHANGE_ENEMY_DESCRIPTION":
      return {
        ...state,
        description: action.payload.newDescription,
      };
    case "CHANGE_ENEMY_DAMAGE":
      return {
        ...state,
        damage: action.payload.newDamage,
      };
    case "CHANGE_ENEMY_DEFENSE":
      return {
        ...state,
        defense: action.payload.newDefense,
      };
    case "CHANGE_ENEMY_MAX_HEALTH":
      return {
        ...state,
        maxHealth: action.payload.newMaxHealth,
      };
    case "CHANGE_ENEMY_IMAGE":
      return {
        ...state,
        image: action.payload.newImage,
      };
    case "CHANGE_ENEMY_GOLD":
      return {
        ...state,
        gold: action.payload.newGold,
      };
    case "CHANGE_ENEMY_EXPERIENCE":
      return {
        ...state,
        experience: action.payload.newExperience,
      };
    case "CHANGE_ENEMY_DROPS":
      return {
        ...state,
        drops: action.payload.newDrops,
      };

    default:
      return state;
  }
};

export { enemyReducer };
