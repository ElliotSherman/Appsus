import NoteControls from "./note-controls.jsx"
export default function NotePreview({ note, handleRemoveNote }) {
  return (
    <div
      className={` note-preview ${"note level-2"}`}
      style={{ overflow: "hidden" }}
    >
      <div className="flex column note-preview-content">
        {/* 
        you have 4 types of notes you will render the preview elements according to the type in the props
      */}
        <p style={{marginBottom:'auto'}}>{JSON.stringify(note)}</p>
        <NoteControls handleRemoveNote={handleRemoveNote} id={note.id} />
      </div>
    </div>
  )
}
