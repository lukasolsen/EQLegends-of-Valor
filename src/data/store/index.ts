import { createStore, combineReducers } from "redux";

import { enemyReducer } from "./enemy/enemy";

const rootReducer = combineReducers({
  enemy: enemyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer);
