import React from "react";
import Card from "../Card";

import "./style.section.css";

const Section = ({ title, notes, setNotes, info }) => {
  return (
    <div className="section">
      <h1>{title}</h1>
      {notes.length <= 0 ? (
        <p className="null" data-null={info}>
          tidak ada
        </p>
      ) : (
        ""
      )}
      <div className="cardgroup">
        {notes.map((note) => (
          <Card key={note.id} setNotes={setNotes} {...note} />
        ))}
      </div>
    </div>
  );
};

export default Section;
