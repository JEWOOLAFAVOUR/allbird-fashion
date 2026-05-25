"use client";
import { useState } from "react";

export default function NotePage() {
  //   const notes = [
  //   { id: 1, title: "Hello, Monday", content: "This is my first note." },
  //   { id: 2, title: "Hello, Tuesday", content: "This is my second note." },
  //   ];
  const [notes, setNotes] = useState([
    { id: 1, title: "Hello, Monday", content: "This is my first note." },
    { id: 2, title: "Hello, Tuesday", content: "This is my second note." },
  ]);

  function addNote() {
    // notes.push({
    //   id: 3,
    //   title: "Hello, Wednesday",
    //   content: "This is my third note.",
    // });
    // console.log(notes);
    const newNote = {
      id: 3,
      title: "Hello, Wednesday",
      content: "This is my third note.",
    };

    setNotes([...notes, newNote]);

    // setNotes([])
  }

  return (
    <div>
      <h1>My Notes</h1>
      <p>This is a simple note-taking app.</p>
      <div>
        {notes.map((data, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-2 p-4 border-2 border-gray-300 rounded-md"
            >
              <h2>{index + 1}.</h2>
              <h2>{data.title}</h2>
              <p>{data.content}</p>
            </div>
          );
        })}
      </div>
      <button
        onClick={addNote}
        className="cursor-pointer bg-blue-500 text-white p-2 rounded-md"
      >
        Add Note
      </button>
    </div>
  );
}
