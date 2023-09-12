import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { enemyReducer } from "./enemy/enemy";
import { gameReducer } from "./game/game";
import { playerReducer } from "./player/player";

const rootReducer = combineReducers({
  enemy: enemyReducer,
  game: gameReducer,
  player: playerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(thunk));
