type LogT = {
  message: string;
  color?: string;
};

interface IMove {
  name: string; // Name of the move | e.g. "Fireball"
  description: string; // Description of the move | e.g. "A fiery ball of fire"

  // Basic Leveling
  level: number; // Current level of the move | e.g. 1
  maxLevel: number; // Max level the move can be | e.g. 5

  unlocked: boolean; // Whether the move is unlocked or not | e.g. true
  unlockedAtLevel: number; // Level the move is unlocked at | e.g. 1

  damage?: number; // Damage the move does | e.g. 10
  healingAmount?: number; // Amount the move heals | e.g. 10
  defense?: number; // Defense bonus the move gives | e.g. 5

  // Optional properties
  criticalHitChance?: number; // Chance the move will crit | e.g. 0.1
}

type EnemyState = {
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
};

type GameState = {
  isPlayerTurn: boolean; // Whether it is the player's turn or not | e.g. true
  hasEnded: boolean;
  turnNumber: number; // Current turn number | e.g. 1
  logs: LogT[]; // Logs of the game | e.g. [{ message: "You hit the enemy!" }]
  moves: {
    attack: IMove[]; // Attack moves the player has | e.g. [{ name: "Fireball" }]
    defend: IMove[]; // Defend moves the player has | e.g. [{ name: "Shield" }]
    heal: IMove[]; // Heal moves the player has | e.g. [{ name: "Potion" }]
  };
};

interface IPlayerState {
  name: string; // Name of the player | e.g. "John"
  description: string; // Description of the player | e.g. "A brave adventurer"
  image: string; // Image of the player | e.g. "player.png"

  health: number; // Current health of the player | e.g. 10
  maxHealth: number; // Max health of the player | e.g. 10
  level: number; // Current level of the player | e.g. 1
  maxLevel: number; // Max level the player can be | e.g. 5
  damage: number; // Damage the player does | e.g. 5
  defense: number; // Defense the player has | e.g. 5
  experience: number; // Experience the player has | e.g. 10
  gold: number; // Gold the player has | e.g. 10
  items: IItem[]; // Items the player has | e.g. ["potion", "sword"]
}

interface IItem {
  name: string; // Name of the item | e.g. "Potion"
  description: string; // Description of the item | e.g. "Heals 10 health"
  image: string; // Image of the item | e.g. "potion.png"

  healingAmount: number; // Amount the item heals | e.g. 10
  defenseBonus: number; // Defense bonus the item gives | e.g. 5

  unlocked: boolean; // Whether the item is unlocked or not | e.g. true
  unlockedAtLevel: number; // Level the item is unlocked at | e.g. 1

  maxLevel: number; // Max level the item can be | e.g. 1

  // Optional properties
  damageBonus?: number; // Damage bonus the item gives | e.g. 5
  criticalHitChance?: number; // Chance the item will crit | e.g. 0.1
}

interface IState {
  enemy: EnemyState;
  game: GameState;
  player: IPlayerState;
}
