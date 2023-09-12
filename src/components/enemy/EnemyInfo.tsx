import { useSelector } from "react-redux";

const EnemyInfo = () => {
  const enemyHealth = useSelector((state: IState) => state.enemy.health);
  const enemyMaxHealth = useSelector((state: IState) => state.enemy.maxHealth);
  const enemyName = useSelector((state: IState) => state.enemy.name);
  const monsterImageSrc = useSelector((state: IState) => state.enemy.image);
  const enemyDrops = useSelector((state: IState) => state.enemy.drops);
  const enemyLevel = useSelector((state: IState) => state.enemy.level);
  const enemyDescription = useSelector(
    (state: IState) => state.enemy.description
  );
  const isPlayerTurn = useSelector((state: IState) => state.game.isPlayerTurn);

  // Calculate the remaining health percentage
  const healthPercentage = Math.max((enemyHealth / enemyMaxHealth) * 100, 0);

  // Determine the color of the health bar based on healthPercentage
  let healthBarColor = "bg-green-500";
  if (healthPercentage <= 30) {
    healthBarColor = "bg-red-500";
  } else if (healthPercentage <= 60) {
    healthBarColor = "bg-yellow-500";
  }

  let healthTextColor = "text-gray-600";
  if (enemyHealth <= 30) {
    healthTextColor = "text-red-500";
  } else if (enemyHealth <= 60) {
    healthTextColor = "text-yellow-500";
  } else if (enemyHealth <= 90) {
    healthTextColor = "text-green-500";
  }

  // Determine if the enemy is defeated
  const isDefeated = enemyHealth <= 0;

  return (
    <div className={`bg-white dark:bg-gray-800 p-4 rounded shadow-md`}>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold mb-2">{enemyName}</h2>
          <div
            className={`relative w-32 h-4 bg-gray-300 dark:bg-gray-600
            rounded-full overflow-hidden`}
          >
            {isDefeated ? (
              <div
                className="h-full bg-red-500 transition-width ease-out duration-300"
                style={{ width: "0%" }}
              ></div>
            ) : (
              <div
                className={`absolute h-full transition-width ease-out duration-300 ${healthBarColor}`}
                style={{ width: `${healthPercentage}%` }}
              ></div>
            )}
          </div>
          <p
            className={`mt-2 ${isDefeated ? "text-red-500" : healthTextColor}`}
          >
            Health: {isDefeated ? 0 : enemyHealth}
          </p>
        </div>
        <div className="w-32 h-32 bg-gray-300 dark:bg-gray-600 rounded-full overflow-hidden">
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
      <div className="mt-4">
        <p className="text-gray-600">Level: {enemyLevel}</p>
        <p className="text-gray-600">Description: {enemyDescription}</p>
      </div>
      {isDefeated && (
        <div className="mt-4">
          <p className="text-green-500 font-semibold text-2xl">
            You have defeated the enemy!
          </p>
          {enemyDrops.length > 0 && (
            <div>
              <p className="text-gray-600">Rewards:</p>
              <ul className="list-disc list-inside">
                {enemyDrops.map((drop, index) => (
                  <li key={index} className="text-gray-600">
                    {drop}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EnemyInfo;
