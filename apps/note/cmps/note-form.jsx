import NoteControls from "./note-controls.jsx"

export default function NoteForm({
  handleChange,
  handleSave,
  placeholder,
  handleColor,
  handlePin,
  handleLabel,
}) {
  return (
    <form className="flex column add-note note-form" onChange={(ev) => handleChange(ev)}>
      <input placeholder="Title" type="text" name="title" />
      <input placeholder={placeholder} type="text" name="text" />
      <NoteControls
        handleSave={handleSave}
        handleColor={handleColor}
        handleLabel={handleLabel}
        handlePin={handlePin}
      />
    </form>
  )
}
