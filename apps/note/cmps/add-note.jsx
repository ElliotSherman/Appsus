import { surveyService } from "../../../services/survey.service.js"
import AddNoteTypeSelector from "./add-note-type-selector.jsx"
import NoteImg from "./note-img.jsx"
import NoteText from "./note-text.jsx"
import NoteTodo from "./note-todos.jsx"
import NoteVideo from "./note-video.jsx"

// ? image note
// TODO - user clicks on img icon
// TODO - make an img text input if user clicks img for title after hitting enter or clicking upload image allow user to upload an img
// ? text note
// DONE - make a title and text input if user just starts to type
// todo - style the inputs form
// todo - style the input form controls
// todo - user types in text we need to save the inputs title and text
// todo - after the user clicks save, the new note is added to the db and is rendered to the list of notes
// todo - 

export default class AddNote extends React.Component {
  state = {
    // survey: null,
    answers: [],
    inputType: null,
  }

  componentDidMount() {
    // surveyService.getById().then((survey) => {
      this.setState({
        // survey,
        answers: new Array(2).fill(null),
      })
    // })
  }
  DynamicCmp = (props) => {
    switch (this.state.inputType) {
      case "text":
        return <NoteText {...props} />

      case "image":
        return <NoteImg {...props} />

      case "iframe":
        return <NoteVideo {...props} />

      case "todo":
        return <NoteTodo {...props} />
    }
  }
  handleClick = (type) => {
    this.setState({ inputType: type })
    this.addMouseListner()
  }
  addMouseListner = () => {
    window.addEventListener("click", this.handleCloseDynamicComponent)
  }
  handleCloseDynamicComponent = (ev) => {
    console.log(ev.target.className)
  }
  onChangeVal = (ev) => {
    const {value , name } = ev.target
    const answers = this.state.answers.map((a, currIdx) => (currIdx !== +name) ? a : value)
    this.setState({ answers })
  }
  render() {
    const { inputType } = this.state
    const { DynamicCmp, onChangeVal, handleClick } = this
    return (
      <section className="flex justify-center add-note">
        {!inputType ? <AddNoteTypeSelector handleClick={handleClick} /> : ""}
        <DynamicCmp handleChange={onChangeVal} />
      </section>
    )
  }
}
