"use client";

import { useState } from "react";

export default function page() {
  const [isLightOn, setIsLightOn] = useState(true);

  function toogleLight() {
    setIsLightOn(!isLightOn);
  }
  return (
    <div
      className="bg-black min-h-screen"
      style={{ backgroundColor: isLightOn ? "white" : "black" }}
    >
      <button
        onClick={toogleLight}
        className="cursor-pointer"
        style={{ color: isLightOn ? "black" : "white" }}
      >
        {isLightOn ? "OFF" : "ON"}
      </button>
    </div>
  );
}
