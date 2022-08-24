import NoteControls from "./note-controls.jsx"

export default function NoteText({ handleChange }) {
    
    return (
    <form className="add-note note-text" onChange={(ev)=>handleChange(ev)}>
      <input placeholder="Title" type="text" name='0' />
      <input placeholder="Take a note..." type="text" name="1" />
      <NoteControls />
    </form>
  )
}
