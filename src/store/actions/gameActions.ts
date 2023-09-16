export const switchTurn = () => ({
  type: "SWITCH_TURN",
});

export const addLog = (log: LogT) => ({
  type: "ADD_LOG",
  payload: {
    log,
  },
});

export const incrementTurnNumber = () => ({
  type: "INCREMENT_TURN_NUMBER",
});

export const endGame = () => ({
  type: "END_GAME",
});
