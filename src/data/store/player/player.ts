const initialState: PlayerState = {
  health: 100,
  maxHealth: 100,
  level: 1,
  maxLevel: 5,
  damage: 10,
  defense: 5,
  experience: 0,
  gold: 0,
  items: [
    {
      name: "Potion",
      description: "Heals 10 health",
      image: "potion.png",
      healingAmount: 10,
      unlocked: true,
      unlockedAtLevel: 1,
      maxLevel: 1,
    },
  ],
  name: "John",
  description: "A brave adventurer",
  image: "player.png",
};

const playerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "DAMAGE_PLAYER":
      return {
        ...state,
        health: state.health - action.payload.damage,
      };

    case "HEAL_PLAYER":
      console.log(action.payload.healingAmount);
      return {
        ...state,
        health: state.health + action.payload.healingAmount,
      };

    case "UPDATE_PLAYER_DEFENSE":
      return {
        ...state,
        defense: action.payload.newDefense,
      };

    case "UPDATE_PLAYER_EXPERIENCE":
      return {
        ...state,
        experience: action.payload.newExperience,
      };

    case "UPDATE_PLAYER_GOLD":
      return {
        ...state,
        gold: action.payload.newGold,
      };

    case "UPDATE_PLAYER_ITEMS":
      return {
        ...state,
        items: action.payload.newItems,
      };

    default:
      return state;
  }
};

export { playerReducer };
