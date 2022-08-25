export default function NoteControls({ handleSave }) {
  return (
    <div>
      <button

        onClick={(ev) => {
          ev.preventDefault()
          handleSave(ev)
          // console.log("Clicked note control")
        }}
      >
        save
      </button>
    </div>
  )
}
