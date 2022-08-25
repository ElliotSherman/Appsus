import NoteForm from "./note-controls.jsx"

export default function NoteForm({ handleChange, handleSave , placeHolder , noteType }) {
    
    return (
    <form className="add-note note-text" onChange={(ev)=>handleChange(ev)}>
      <input placeholder="Title" type="text" name='title' />
      <input placeholder={placeHolder} type="text" name={noteType} />
      <NoteControls handleSave={handleSave}/>
    </form>
  )
}