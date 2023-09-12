const initialState: GameState = {
  isPlayerTurn: true, // Assuming player starts first
  turnNumber: 1,
  logs: [],
  moves: {
    attack: [
      {
        name: "Slash",
        description: "A basic slash attack",
        level: 1,
        maxLevel: 5,
        unlocked: true,
        unlockedAtLevel: 1,
        damage: 10,
      },
      {
        name: "Fireball",
        description: "A basic fireball attack",
        level: 1,
        maxLevel: 5,
        unlocked: false,
        unlockedAtLevel: 1,
        damage: 10,
      },
    ],
    defend: [
      {
        name: "Shield",
        description: "A basic shield defense",
        level: 1,
        maxLevel: 5,
        unlocked: true,
        unlockedAtLevel: 1,
        defense: 5,
      },
    ],
    heal: [
      {
        name: "Potion",
        description: "A basic healing potion",
        level: 1,
        maxLevel: 5,
        unlocked: true,
        unlockedAtLevel: 1,
        healingAmount: 10,
      },
    ],
  },
};

const gameReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SWITCH_TURN":
      return {
        ...state,
        isPlayerTurn: !state.isPlayerTurn,
      };

    case "ADD_LOG":
      return {
        ...state,
        logs: [...state.logs, action.payload.log],
      };

    case "INCREMENT_TURN_NUMBER":
      return {
        ...state,
        turnNumber: state.turnNumber + 1,
      };

    default:
      return state;
  }
};

export { gameReducer };