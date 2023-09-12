import { useSelector } from "react-redux";

const Log = () => {
  const logs: LogT[] = useSelector((state: IState) => state.game.logs);

  return (
    <ul>
      {logs.map((message, index) => (
        <li key={index} className={`text-${message.color ?? "white"}`}>
          {message.message}
        </li>
      ))}
    </ul>
  );
};

export default Log;
