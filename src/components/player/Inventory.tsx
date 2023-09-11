const Inventory = ({
  inventory,
  useItem,
}: {
  inventory: InventoryItem[];
  useItem: (item: string) => void;
}) => {
  return (
    <ul>
      {inventory.map((item, index) => (
        <li key={index}>
          {item.name} -{" "}
          <button
            className="text-blue-500 underline"
            onClick={() => useItem(item)}
          >
            Use
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Inventory;
