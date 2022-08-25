export default function NoteControls({ handleSave, handleRemoveNote, id }) {
  return (
    <div className="flex space-between note-controls">
      {handleSave ? (
        <button
          title="save note"
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
          title="remove note"
          className="note-btn note-btn-remove"
          onClick={(ev) => {
            ev.preventDefault()
            handleRemoveNote(id)
          }}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      )}
      <button title="note color" className="note-btn note-btn-color">
        <i className="fas fa-palette"></i>
      </button>
      <button title="clone note" className="note-btn note-btn-clone">
        <i className="fas fa-clone"></i>
      </button>
      <button title="share note" className="note-btn note-btn-share">
        <i className="fas fa-share"></i>
      </button>
      <button title="label note" className="note-btn note-btn-label">
        <i className="fas fa-tag"></i>
      </button>
      <button title="pin note" className="note-btn note-btn-pin">
        <i className="fas fa-thumbtack"></i>
      </button>
    </div>
  )
}
