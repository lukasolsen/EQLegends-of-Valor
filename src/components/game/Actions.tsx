import { useState } from "react";

type buttonRefsType = {
  attack?: HTMLButtonElement;
  defend?: HTMLButtonElement;
  items?: HTMLButtonElement;
};

const Actions = ({
  doAction,
  moves,
}: {
  doAction: (move: IMove) => void;
  moves: { attack: IMove[]; defend: IMove[]; items: IMove[] };
}) => {
  const [popup, setPopup] = useState(false);
  const [popupCategory, setPopupCategory] = useState("");
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });

  const buttonRefs: buttonRefsType = {};

  const showPopup = (category: string, buttonRef: HTMLButtonElement) => {
    console.log(buttonRef.getBoundingClientRect());
    const buttonRect = buttonRef.getBoundingClientRect();
    setPopupCategory(category);
    setPopupPosition({
      top: buttonRect.top - 10,
      left: buttonRect.left + buttonRect.width / 2,
    });
    setPopup(true);
  };

  return (
    <>
      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-gray-800 dark:bg-gray-700 text-white p-4">
        <div className="flex justify-around">
          <button
            className="text-blue-500 underline"
            ref={(ref) => {
              if (!ref) return;

              buttonRefs.attack = ref;
            }}
            onClick={() => showPopup("attack", buttonRefs.attack)}
          >
            Attack
          </button>
          <button
            className="text-green-500 underline"
            ref={(ref) => {
              if (!ref) return;

              buttonRefs.defend = ref;
            }}
            onClick={() => showPopup("defend", buttonRefs.defend)}
          >
            Defend
          </button>
          <button
            className="text-yellow-500 underline"
            ref={(ref) => {
              if (!ref) return;

              buttonRefs.items = ref;
            }}
            onClick={() => showPopup("items", buttonRefs.items)}
          >
            Items
          </button>
        </div>
      </div>

      {/* Popups */}
      {popup && (
        <div
          className="fixed bg-white dark:bg-gray-800 p-4 rounded shadow-md w-64"
          style={{
            top: popupPosition.top + "px",
            left: popupPosition.left + "px",
            transform: "translate(-50%, -100%)",
          }}
        >
          <h2 className="text-lg font-semibold mb-4">
            {popupCategory.toUpperCase()} Moves
          </h2>
          <ul className="flex flex-col gap-2">
            {popupCategory === "attack" &&
              moves.attack.map((move: IMove, index: number) => (
                <li key={index}>
                  <button
                    className="flex justify-between hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md cursor-pointer flex-row w-full"
                    onClick={() => {
                      doAction(move);
                      setPopup(false);
                    }}
                  >
                    <span>{move.name}</span>
                    <span>Defense: {move.damage}</span>
                  </button>
                </li>
              ))}
            {popupCategory === "defend" &&
              moves.defend.map((move: IMove, index: number) => (
                <li key={index}>
                  <button
                    className="flex justify-between hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md cursor-pointer flex-row w-full"
                    onClick={() => {
                      doAction(move);
                      setPopup(false);
                    }}
                  >
                    <span>{move.name}</span>
                    <span>Defense: {move.healAmount}</span>
                  </button>
                </li>
              ))}
            {popupCategory === "items" &&
              moves.items.map((move: IMove, index: number) => (
                <li key={index}>
                  <button
                    className="flex justify-between hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md cursor-pointer flex-row w-full"
                    onClick={() => {
                      doAction(move);
                      setPopup(false);
                    }}
                  >
                    <span>{move.name}</span>
                    <span>Defense: {move.healAmount}</span>
                  </button>
                </li>
              ))}
          </ul>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
            onClick={() => setPopup(false)}
          >
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default Actions;
