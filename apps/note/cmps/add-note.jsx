import AddNoteTypeSelector from "./add-note-type-selector.jsx"
import NoteForm from "./note-form.jsx"
// ? image note and video
// DONE - user clicks on img icon
// DONE - make an img text input if user clicks img for title after hitting enter or clicking upload image allow user to upload an img

// ? text note & todo
// DONE - make a title and text input if user just starts to type
// DONE - user types in text we need to save the inputs title and text
// DONE - after the user clicks save, the new note is added to the db and is rendered to the list of notes
// Done - style the inputs form
// DONE - style the input form controls

// todo - after user click 'take a note' use Ref to select input
// in progress - close form when click outside of the form

export default class AddNote extends React.Component {
  state = {
    info: {},
    inputType: null,
    placeHolder: null,
  }

  componentDidMount() {
    // this.setState((prev, curr) => ({
    //   ...prev,
    // }))
  }

  handleClick = (type, placeholderTxt) => {
    console.log("clicked", type , placeholderTxt)
    this.setState(({inputType: type, placeHolder: placeholderTxt }))
    this.addMouseListner()
  }

  closeForm = () => {
    this.handleClick('','')
    window.removeEventListener("click", this.handleCloseDynamicComponent, {
      passive: true,
    })
  }

  addMouseListner = () => {
    window.addEventListener("click", this.handleCloseDynamicComponent)
  }

  handleCloseDynamicComponent = (ev) => {
    // console.log(ev.target.parentElement)
    const { closeForm } = this
    $("body").click(function (ev) {
      if (ev.target.id == "myDiv" || $(ev.target).parents("#myDiv").length) {
        // alert("Inside div");
        return
      } else {
        // alert("Outside div");
        closeForm()
      }
    })
  }

  onChangeVal = ({ target }) => {
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
    const { info, inputType } = this.state
    this.props.handleAddNote(info, inputType)
  }
  handleColor = () => {
    console.log("clicked btn")
  }
  handleLabel = () => {
    console.log("clicked btn")
  }
  handlePin = () => {
    console.log("clicked btn")
  }
  render() {
    const { inputType, placeHolder } = this.state
    const {
      handlePin,
      handleLabel,
      handleColor,
      onChangeVal,
      handleClick,
      handleSave,
    } = this
    return (
      <section id="myDiv" className="flex justify-center add-note">
        {/* <div>{inputType}</div> */}
        {!inputType ? <AddNoteTypeSelector handleClick={handleClick} /> : ""}
        {inputType ? (
          <NoteForm
            placeholder={placeHolder}
            type={inputType}
            handleChange={onChangeVal}
            handleSave={handleSave}
            handleColor={handleColor}
            handleLabel={handleLabel}
            handlePin={handlePin}
          />
        ) : (
          ""
        )}
      </section>
    )
  }
}
