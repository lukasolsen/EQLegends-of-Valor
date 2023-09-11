type LogT = {
  message: string;
  color?: string;
};

interface IMove {
  name: string;
  damage?: number;
  healAmount?: number;
  unlocked?: boolean;
  unlockedAtLevel?: number;
  maxLevel?: number;
  level?: number;
  description: string;
}

type EnemyState = {
  name: string;
  health: number;
  maxHealth: number;
  level: number;
  maxLevel: number;
  damage: number;
  defense: number;
  experience: number;
  gold: number;
  drops: string[];
  description: string;
  image: string;
  unlocked: boolean;
  unlockedAtLevel: number;
};
