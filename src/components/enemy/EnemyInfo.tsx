const EnemyInfo = ({
  enemyName,
  enemyHealth,
  isPlayerTurn,
  monsterImageSrc,
}: {
  enemyName: string;
  enemyHealth: number;
  isPlayerTurn: boolean;
  monsterImageSrc: string;
}) => {
  // Determine the color of the health text based on enemyHealth
  let healthTextColor = "text-gray-600";
  if (enemyHealth <= 30) {
    healthTextColor = "text-red-500";
  } else if (enemyHealth <= 60) {
    healthTextColor = "text-yellow-500";
  } else if (enemyHealth <= 90) {
    healthTextColor = "text-green-500";
  }

  return (
    <div className={`bg-white dark:bg-gray-800 p-4 rounded shadow-md`}>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold mb-2">{enemyName}</h2>
          <p className={`${healthTextColor}`}>Health: {enemyHealth}</p>
        </div>
        <div className="w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded-full overflow-hidden">
          <img
            src={monsterImageSrc}
            alt="Monster"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="mt-4">
        <p
          className={`text-gray-600 ${
            isPlayerTurn ? "text-green-500" : "text-red-600"
          }`}
        >
          Turn: {isPlayerTurn ? "Player" : "Monster"}
        </p>
      </div>
    </div>
  );
};

export default EnemyInfo;
