export default function NoteControls({ handleSave, handleRemoveNote, id }) {
  return (
    <div className="flex space-between note-controls">
      {handleSave ? (
        <button
          className="note-btn note-btn-save"
          onClick={(ev) => {
            ev.preventDefault()
            handleSave(ev)
          }}
        >
          <i className="fas fa-plus"></i>
        </button>
      ) : (
        <button
          className="note-btn note-btn-remove"
          onClick={(ev) => {
            ev.preventDefault()
            handleRemoveNote(id)
          }}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      )}
      <button className="note-btn note-btn-color"><i className="fas fa-palette"></i></button>
      <button  className="note-btn note-btn-share"><i className="fas fa-share"></i></button>
      <button  className="note-btn note-btn-pin"><i className="fas fa-thumbtack"></i></button>
    </div>
  )
}
