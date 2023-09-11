const Log = ({ logs }: { logs: LogT[] }) => {
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
