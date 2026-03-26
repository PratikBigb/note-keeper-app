import { useState } from 'react';

import Header from './components/Header';
import Input from './components/Input';
import NoteList from './components/note/NoteList';
import Footer from './components/Footer';

function App() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  function handleNoteChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function handleAddNote(event) {
    event.preventDefault();

    setNotes((prevNotes) => {
      return [
        ...prevNotes,
        {
          id: crypto.randomUUID(),
          title: note.title,
          content: note.content,
        },
      ];
    });

    setNote({
      title: '',
      content: '',
    });
  }

  function handleDeleteNote(id) {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  }

  return (
    <>
      <Header />
      <main>
        <Input
          note={note}
          onNoteChange={handleNoteChange}
          onAddNote={handleAddNote}
        />
        <NoteList notes={notes} onDeleteNote={handleDeleteNote} />
      </main>
      <Footer />
    </>
  );
}

export default App;
