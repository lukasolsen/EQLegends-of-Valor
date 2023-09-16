import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { enemyReducer } from "./reducers/enemyReducer";
import { gameReducer } from "./reducers/gameReducer";
import { playerReducer } from "./reducers/playerReducer";

const rootReducer = combineReducers({
  enemy: enemyReducer,
  game: gameReducer,
  player: playerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(thunk));
