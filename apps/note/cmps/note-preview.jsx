import NoteControls from "./note-controls.jsx"
export default function NotePreview({note}) {
  return (
    <div className={ `note-preview ${"note level-1"}`} style={{overflow:'hidden'}}>
    <pre>{JSON.stringify(note)}</pre>
    <NoteControls />
  </div>
  )
}
