"use strict";
import React, { useState } from "react";
import Draggable from "react-draggable";

const AlertDialog = ({ message, onClose, username }) => {
  const [activeDrags, setActiveDrags] = useState(0);

  const onStart = () => {
    setActiveDrags(activeDrags + 1);
  };

  const onStop = () => {
    setActiveDrags(activeDrags - 1);
  };

  const dragHandlers = { onStart: onStart, onStop: onStop };

  return (
    <Draggable {...dragHandlers}>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 cursor-move">
        <div className="rounded-lg p-10 shadow-lg backdrop-blur-md border border-gray-200 transition-all duration-500 ease-in-out transform hover:scale-105">
          <p className="text-2xl font-semibold">{username}: {message}</p>
          <button
            onClick={onClose}
            className="mt-4 bg-black hover:bg-gray-700 text-white font-bold py-3 px-10 rounded transition-colors duration-300 ease-in-out"
          >
            OK
          </button>
        </div>
      </div>
    </Draggable>
  );
};

export default AlertDialog;
