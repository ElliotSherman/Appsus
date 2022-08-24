import { utilService } from "../../../services/util.service.js"
const { getRandomIntInclusive , makeId } = utilService
export default function NoteList() {
  let notesClasses = () => {
    let classes = []
    for (let i = 0; i < 40; i++) {
      classes.push({class:getRandomIntInclusive(1, 7), id:makeId()})
    }
    return classes
  }
  //   console.log(notesClasses());
  return (
    <div className="note-list">
      <div className="note-list-layout">{
        notesClasses().map(num=><div key={num.id} className={`${'note level-'}${num.class}`}></div>)
      }</div>
    </div>
  )
}
