import React, { useState } from "react";
import "./style.input.css";
import Button from "../Button";

const Input = ({ notes, setNotes }) => {
  const [char, setChar] = useState(50);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const createdAt = new Date().toISOString();

  const timestamp = Date.now();

  const handleTitle = (e) => {
    if (e.target.value.length > 50) {
      e.target.value = e.target.value.substring(0, 50);
    }
    setChar(50 - e.target.value.length);
    setTitle(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const handleClick = (e) => {
    if (title.length <= 0 || content.length <= 0) {
      alert("Catatan belum diisi");
    } else {
      setNotes([
        ...notes,
        {
          id: timestamp,
          title,
          body: content,
          createdAt: createdAt,
          archived: false,
        },
      ]);
      setTitle("");
      setContent("");
      setChar(50);
      console.log(notes);
    }
  };

  return (
    <div className="input">
      <div className="label">
        <h2>Tulis sebuah catatan</h2>
        <p>Sisa karakter : {char}</p>
      </div>
      <div className="input-control">
        <input
          type="text"
          name="title"
          onChange={handleTitle}
          className="noteTitle"
          value={title}
          placeholder="Tulis judul catatanmu...."
        />
        <textarea
          name="content"
          onChange={handleContent}
          className="noteContent"
          value={content}
          placeholder="Tulis isi catatanmu...."
        ></textarea>
        <Button handler={handleClick} title="Buat Catatan" />
      </div>
    </div>
  );
};

export default Input;
