const PlayerInfo = ({ playerHealth }: { playerHealth: number }) => {
  return (
    <>
      <h2 className="text-lg font-semibold mb-2">Player</h2>
      <p className="text-gray-600">Health: {playerHealth}</p>
      <p className="text-gray-600">Inventory:</p>
    </>
  );
};

export default PlayerInfo;
