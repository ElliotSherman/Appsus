import { mailService } from "../services/mail.service.js"
import { LoadingSpinner } from "../../../cmps/spinner.jsx"

export class MailCompose extends React.Component {

    state = {
        loaded: false,
    }

    inputRef = React.createRef()

    componentDidMount() {
        const draftId = this.props.match.params.draftId
        
        if (draftId) {
            mailService.getById(draftId).
                then((draft) => {
                    this.setState({ draft, loaded: true }, this.setFocus)
                })
        } else {
            this.setState({ 
                draft: mailService.createMailObject(), 
                loaded: true,
            }, this.setFocus)
        }
    }

    setFocus() {
        this.inputRef.current.focus()
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value

        this.setState((prevState) => ({
            draft: {
                ...prevState.draft,
                [field]: value
            }
        }), () => {
            mailService.saveDraft(this.state.draft)
                .then(() => {
                    console.log('saved')
                })
        })
    }

    onSubmit = (ev) => {
        ev.preventDefault()

        const { draft } = this.state
        draft.type = 'sent'
        draft.sentAt = new Date()

        mailService.sendEmail(draft)
            .then(() => { 
                alert('Mail submitted')
                this.onGoBack() 
            })
    }

    onGoBack = () => {
        this.props.history.goBack()
    }

    render() {
        if (!this.state.loaded) {
            return <div><LoadingSpinner /></div>
        }

        const { to, subject, body } = this.state.draft
        return (
            <section className="mail-compose">
                <div className="compose-form">
                    <form onSubmit={this.onSubmit}>
                        <div className="to-input">
                            <input
                                ref={this.inputRef}
                                type="text"
                                placeholder="To:"
                                id="to"
                                name="to"
                                value={to}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="subject-input">
                            <input
                                type="text"
                                placeholder="Subject:"
                                id="subject"
                                name="subject"
                                value={subject}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="body-input">
                            <textarea
                                placeholder="Body:"
                                id="body"
                                name="body"
                                value={body}
                                onChange={this.handleChange}
                            />
                        </div>
                        <button>Send</button>
                    </form>
                </div>
            </section >
        )
    }
}
