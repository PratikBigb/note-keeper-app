import { useState } from 'react';

import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import Zoom from '@mui/material/Zoom';

export default function Input() {
  const [isExpanded, setIsExpanded] = useState(false);

  function expandInputAreaHandler() {
    setIsExpanded(true);
  }

  return (
    <>
      <form>
        {isExpanded && (
          <input name="title" type="text" placeholder="Title" required />
        )}
        <textarea
          name="content"
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
