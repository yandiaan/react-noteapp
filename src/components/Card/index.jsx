import React from "react";
import { showFormattedDate } from "../../utils";
import Button from "../Button";

import "./style.card.css";

const Card = ({ id, title, body, createdAt, archived, setNotes }) => {
  const handleDelete = (item) =>
    setNotes((notes) => notes.filter((note) => note.id !== item));

  const handleArchive = (item) =>
    setNotes((notes) =>
      notes.map((note) =>
        note.id === item ? { ...note, archived: !note.archived } : note
      )
    );

  return (
    <div className="card">
      <input type="hidden" name="" value={id} />
      <h2>{title}</h2>
      <small>{showFormattedDate(createdAt)}</small>
      <p>{body}</p>
      <div className="button-group">
        <Button title="Hapus" handler={() => handleDelete(id)} info="hapus" />
        <Button
          title={archived ? "Urungkan" : "Arsipkan"}
          handler={() => handleArchive(id)}
          info="arsip"
        />
      </div>
    </div>
  );
};

export default Card;
