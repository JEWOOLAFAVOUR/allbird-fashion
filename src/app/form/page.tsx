"use client";
import { useState } from "react";

export default function page() {
  const [firstName, setFirstName] = useState("");
  return (
    <div className="p-5">
      <div>
        <h1>First Name</h1>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          className="border p-2"
        />
      </div>
      <button className="p-2 bg-blue-300 mt-3 cursor-pointer">Submit</button>
      <h1 className="mt-5">My name is: {firstName}</h1>
    </div>
  );
}
