import React, { useEffect } from "react";
import "./styles/main.css";
import { getInitialData } from "./utils";

import { Header, Input, Section, Search } from "./components";

export default function App() {
  const [keys, setKeys] = React.useState("");
  const [result, setResult] = React.useState([]);
  const [notes, setNotes] = React.useState(getInitialData());

  const activeData = (result || notes).filter((note) => !note.archived);
  const archivedData = (result || notes).filter((note) => note.archived);

  useEffect(() => {
    setResult(
      notes.filter((note) =>
        note.title.toLowerCase().includes(keys.toLowerCase())
      )
    );
  }, [keys, notes]);

  return (
    <>
      <Header />
      <Search keys={keys} setKeys={setKeys} />
      <Input notes={notes} setNotes={setNotes} />
      <Section
        title="Catatan Aktif"
        notes={activeData}
        setNotes={setNotes}
        info="aktif"
      />
      <Section
        title="Arsip Catatan"
        notes={archivedData}
        setNotes={setNotes}
        info="arsip"
      />
    </>
  );
}
