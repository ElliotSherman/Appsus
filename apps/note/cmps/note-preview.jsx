import NoteControls from "./note-controls.jsx"
import NoteText from "./note-text.jsx"
import NoteImg from "./note-img.jsx"
import NoteVideo from "./note-video.jsx"
import NoteTodo from "./note-todos.jsx"
export default class NotePreview extends React.Component {
  state = {
    currView: null,
    // background:'blue'
  }
  componentDidMount() {
    // this.setState({
    //   currView: this.props.note.type,
    // })
  }
  DynamicCmp = (props) => {
    switch (this.props.note.type) {
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
  handleColor = () => {
    console.log("clicked btn in preview")
    this.setState({
      background: "teal",
    })
  }
  handlePin = () => {
    console.log("clicked in preview handle pin")
  }
  handleDuplicate = () => {
    console.log("clicked duplicate in preview")
  }
  handleLabel = () => {
    console.log("clicked handle label in prev")
  }
  handleShare = () => {
    console.log("clicked handle share in preview")
  }
  render() {
    // console.log(this.state)
    const {
      handleColor,
      handlePin,
      handleDuplicate,
      handleLabel,
      handleShare,
    } = this
    const { currView, background ,   } = this.state
    const { note, handleRemoveNote } = this.props
    const { DynamicCmp } = this
    return (
      <div
        className={` note-preview note ${"level-2"}`}
        style={{ overflow: "hidden", background: `${background}` }}
      >
        <div className="flex column note-preview-content">
          {console.log(note.type)}
          <DynamicCmp note={note} />
          <NoteControls
            handleRemoveNote={handleRemoveNote}
            id={note.id}
            handleColor={handleColor}
            handlePin={handlePin}
            handleShare={handleShare}
            handleLabel={handleLabel}
            handleDuplicate={handleDuplicate}
          />
        </div>
      </div>
    )
  }
}
