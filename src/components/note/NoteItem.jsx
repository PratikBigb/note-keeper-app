import BackspaceIcon from '@mui/icons-material/Backspace';

export default function NoteItem(props) {
  return (
    <li className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={props.onDeleteNote}>
        <BackspaceIcon />
      </button>
    </li>
  );
}
