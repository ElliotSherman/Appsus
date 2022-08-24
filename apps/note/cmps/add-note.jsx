import { surveyService } from "../../../services/survey.service.js"

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
        surveyType,
        survey,
        answers: new Array(survey.cmps.length).fill(null),
      })
    })
  }

  DynamicCmp = (props) => {
    switch (props.type) {
      case "textBox":
        return <TextBox {...props} />
      case "selectBox":
        return <SelectBox {...props} />
    }
  }

  handleClick = (type) => {
    this.setState({inputType: type })

    // todo load the form with a promise
  }

  onChangeVal = (idx, val) => {
    console.log("Parent - SurveyApp got:", val, "idx:", idx)
    const answers = this.state.answers.map((a, currIdx) =>
      currIdx !== idx ? a : val
    )
    this.setState({ answers })
  }

  render() {
    const { survey, answers } = this.state
    // if (!survey) return '<div></div>'
    const { DynamicCmp, onChangeVal, handleClick } = this
    return (
      <section className="flex justify-center add-note">
        {/* <h2>Survey - {survey.title}</h2> */}
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
        {/* {
            survey.cmps.map((cmp, idx) => <div key={idx} style={{
                backgroundColor: 'lightcoral',
                padding: '5px', margin: '5px'
            }}>
                <DynamicCmp
                    type={cmp.type} info={cmp.info}
                    onChangeVal={(val) => {
                        onChangeVal(idx, val)
                    }}
                />
            </div>)
        } */}

        {/* <hr />
        <pre>
            {JSON.stringify(answers, null, 2)}
        </pre> */}
      </section>
    )
  }
}

export class TextBox extends React.Component {
  render() {
    const { label } = this.props.info
    const { onChangeVal } = this.props

    return (
      <label>
        {label}
        <input
          type="text"
          onChange={(ev) => {
            onChangeVal(ev.target.value)
          }}
        />
      </label>
    )
  }
}

export class SelectBox extends React.Component {
  render() {
    const { label, opts } = this.props.info
    const { onChangeVal } = this.props

    return (
      <label>
        {label}
        <select
          onChange={(ev) => {
            onChangeVal(ev.target.value)
          }}
        >
          <option value="">Select</option>
          {opts.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </label>
    )
  }
}
