import { surveyService } from "../../../services/survey.service.js"
import NoteImg from "./note-img.jsx"
import NoteText from "./note-text.jsx"
import NoteTodo from "./note-todos.jsx"
import NoteVideo from "./note-video.jsx"

// ? image note
// TODO - user clicks on img icon
// TODO - make an img text input if user clicks img for title after hitting enter or clicking upload image allow user to upload an img
// ? text note
// TODO - make a title and text input if user just starts to type

export default class AddNote extends React.Component {
  state = {
    survey: null,
    answers: [],
    inputType: null,
  }

  componentDidMount() {
    surveyService.getById().then((survey) => {
      this.setState({
        survey,
        answers: new Array(survey.cmps.length).fill(null),
      })
    })
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
    // todo load the form
  }
  addMouseListner = () => {
    window.addEventListener("click", this.handleCloseDynamicComponent)
  }
  handleCloseDynamicComponent = (ev) => {
    console.log(ev.target.className)
  }
  onChangeVal = (idx, val) => {
    console.log("Parent - SurveyApp got:", val, "idx:", idx)
    const answers = this.state.answers.map((a, currIdx) =>
      currIdx !== idx ? a : val
    )
    this.setState({ answers })
  }

  render() {
    const { inputType } = this.state
    const { DynamicCmp, onChangeVal, handleClick } = this
    return (
      <section className="flex justify-center add-note">
        {!inputType ? (
          <div className="flex add-note-type">
            <button
              className="add-note-type text-btn"
              onClick={() => handleClick("text")}
            >
              Take a note...
            </button>
            <button
              className="add-note-type img-btn"
              onClick={() => handleClick("image")}
            >
              <i className="fas fa-image"></i>
            </button>
            <button
              className="add-note-type yt-btn"
              onClick={() => handleClick("iframe")}
            >
              <i className="fab fa-youtube"></i>
            </button>
            <button
              className="add-note-type todo-btn"
              onClick={() => handleClick("todo")}
            >
              <i className="far fa-check-square"></i>
            </button>
          </div>
        ) : (
          ""
        )}
        <DynamicCmp name={"Baba"} />
      </section>
    )
  }
}
