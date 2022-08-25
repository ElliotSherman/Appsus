import { mailService } from '../services/mail.service.js'

export class MailDetails extends React.Component {

    state = {
        mail: null
    }

    componentDidMount() {
        this.loadMail()
    }

    loadMail = () => {
        const { mailId } = this.props.match.params
        mailService.getById(mailId)
            .then((mail) => {
                if (!mail) return this.onGoBack()
                this.setState({ mail })
            })
    }

    onRemove = (mail) => {
        mailService.removeMail(mail)
            .then(() => this.loadMail())
    }

    onGoBack = () => {
        this.props.history.push('/mail')
    }

    render() {
        const { mail } = this.state
        if (!mail) return <h1>Loading......</h1>
        return (
            <section className="mail-details">
                <div className="mail-content">
                <h3>From: {mail.from}</h3>
                <h3>To: {mail.to}</h3>
                <hr/>
                <h3>Subject: {mail.subject}</h3>
                <hr/>
                <h3>{mail.body}</h3>
                <hr/>
                <h3>Received At: {mail.receivedAt}</h3>
                </div>
                <h1>{mail.bod}</h1>
                <button className="remove-mail" onClick={() => {
                    this.onRemove(mail)
                }}>Remove
                </button>
                <button className="go-back" onClick={() => {
                    this.onGoBack()
                }}>Go Back
                </button>
            </section>
        )
    }

}