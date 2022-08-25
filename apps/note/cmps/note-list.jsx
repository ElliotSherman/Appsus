import { utilService } from "../../../services/util.service.js"
import NotePreview from "../cmps/note-preview.jsx"
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
        {notes.map(note => <NotePreview key={note.id} note={note} />)}
      </div>
    </div>
  )
}
