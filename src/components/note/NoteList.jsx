import NoteItem from './NoteItem';

import sleepingImage from '../../assets/images/sleeping.png';

export default function NoteList(props) {
  return props.notes.length === 0 ? (
    <div className="empty-icon-container">
      <img src={sleepingImage} alt="empty-icon" className="empty-icon" />
      <p>No note kept yet!</p>
    </div>
  ) : (
    <ul>
      {props.notes.map((note) => {
        return (
          <NoteItem
            key={note.id}
            title={note.title}
            content={note.content}
            onDeleteNote={() => props.onDeleteNote(note.id)}
          />
        );
      })}
    </ul>
  );
}
