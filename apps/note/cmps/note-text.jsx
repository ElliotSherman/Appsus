import NoteControls from "./note-controls.jsx"

export default function NoteText({ handleChange, handleSave }) {
    
    return (
    <form className="add-note note-text" onChange={(ev)=>handleChange(ev)}>
      <input placeholder="Title" type="text" name='title' />
      <input placeholder="Take a note..." type="text" name="text" />
      <NoteControls handleSave={handleSave}/>
    </form>
  )
}
