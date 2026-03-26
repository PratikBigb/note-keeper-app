import { useState } from 'react';

import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import Zoom from '@mui/material/Zoom';

export default function Input(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  function expandInputAreaHandler() {
    setIsExpanded(true);
  }

  return (
    <>
      <form onSubmit={props.onAddNote}>
        {isExpanded && (
          <input
            name="title"
            type="text"
            value={props.note.title}
            onChange={props.onNoteChange}
            placeholder="Title"
            required
          />
        )}
        <textarea
          name="content"
          value={props.note.content}
          onChange={props.onNoteChange}
          placeholder="Take a note..."
          rows={isExpanded ? '3' : '1'}
          required
          onClick={expandInputAreaHandler}
        />
        <Zoom in={isExpanded}>
          <button type="submit">
            <LibraryAddIcon sx={{ fontSize: 30 }} />
          </button>
        </Zoom>
      </form>
    </>
  );
}
