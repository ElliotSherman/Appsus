import NoteControls from "./note-controls.jsx"

export default function NoteForm({ handleChange, handleSave , placeHolder }) {
    
    return (
    <form className="add-note note-text" onChange={(ev)=>handleChange(ev)}>
      <input placeholder="Title" type="text" name='title' />
      <input placeholder={placeHolder} type="text" name="text" />
      <NoteControls handleSave={handleSave}/>
    </form>
  )
}
