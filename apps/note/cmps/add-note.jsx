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
// DONE - user types in text we need to save the inputs title and text
// DONE - after the user clicks save, the new note is added to the db and is rendered to the list of notes

// in progress - after user click 'take a note' use Ref to select input
// todo - style the inputs form
// todo - style the input form controls

export default class AddNote extends React.Component {
  state = {
    info: {},
    inputType: null,
  }
  
  componentDidMount() {
    // this.setState((prevState) => {
    //   info
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
    // console.log(ev.target)
  }

  onChangeVal = ({target}) => {
    // if(ev.target.clickedsave === 'save')console.log('clicked save')
    const field = target.name
    const value = target.type === "number" ? +target.value : target.value
    this.setState((prevState) => ({
      info: {
        ...prevState.info,
        [field]: value,

      },
    }))
  }
  handleSave = () => {
    const {info , inputType} = this.state
    this.props.handleAddNote(info , inputType)
  }
  render() {
    const { inputType } = this.state
    const { DynamicCmp, onChangeVal, handleClick, handleSave } = this
    return (
      <section className="flex justify-center add-note">
        {!inputType ? <AddNoteTypeSelector handleClick={handleClick} /> : ""}
        <DynamicCmp handleChange={onChangeVal} handleSave={handleSave} />
      </section>
    )
  }
}
