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
        console.log('mail.isRemoved:', mail.isRemoved)
        mailService.removeMail(mail)
            .then(() => this.loadMail())
    }

    onGoBack = () => {
        this.props.history.push('/mail')
    }

    render() {
        const { mail } = this.state
        return (
            <section className="mail-details">
                <h1 onClick={this.onGoBack}>HELLO</h1>
                <button className="remove-mail" onClick={() => {
                    this.onRemove(mail)
                }}>Remove
                </button>
            </section>
        )
    }

}