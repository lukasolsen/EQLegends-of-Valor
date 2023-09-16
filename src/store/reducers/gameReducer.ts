export interface IGameState {
  isPlayerTurn: boolean; // Whether it is the player's turn or not | e.g. true
  hasEnded: boolean;
  turnNumber: number; // Current turn number | e.g. 1

  logs: LogT[]; // Logs of the game | e.g. [{ message: "You hit the enemy!" }]

  moves: {
    attack: IMove[]; // Attack moves the player has | e.g. [{ name: "Fireball" }]
    defend: IMove[]; // Defend moves the player has | e.g. [{ name: "Shield" }]
    heal: IMove[]; // Heal moves the player has | e.g. [{ name: "Potion" }]
  };
}

const initialState: IGameState = {
  isPlayerTurn: true, // Assuming player starts first
  hasEnded: false,
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

const gameReducer = (state = initialState, action: IActionRedux) => {
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

    case "END_GAME":
      return {
        ...state,
        hasEnded: true,
      };

    default:
      return state;
  }
};

export { gameReducer };
