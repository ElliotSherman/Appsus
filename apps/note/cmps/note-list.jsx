import { utilService } from "../../../services/util.service.js"
const { getRandomIntInclusive, makeId } = utilService

export default function NoteList({ notes }) {
  console.log(notes)
  let notesClasses = () => {
    let classes = []
    for (let i = 0; i < 40; i++) {
      classes.push({ class: getRandomIntInclusive(1, 7), id: makeId() })
    }
    return classes
  }

  return (
    <div className=" note-list">
      <div className="note-list-layout">
        {
          // notesClasses().map((num) => (
          //   <div key={num.id} className={`${"note level-"}${num.class}`}></div>
          // ))
        }

        {notes.map((note) => (
          // <div key={note.id} className={`${"note level-1"} ${note.class}`}>
          <div key={note.id} className={`${"note level-1"}`} style={{overflow:'hidden'}}>
            <pre>{JSON.stringify(note)}</pre>
          </div>
        ))}
      </div>
    </div>
  )
}
