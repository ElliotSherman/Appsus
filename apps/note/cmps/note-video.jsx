
export default function NoteVideo({note}) {
  return (
    <div className="note-video">
      <iframe src={note.info.url} width='auto' height='100px'></iframe>
      <h2>{note.info.title}</h2>
    </div>
  )
}
