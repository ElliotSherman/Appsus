import { MailFilter } from "../cmps/mail-filter.jsx"
import { MailList } from "../cmps/mail-list.jsx"
import { mailService } from "../services/mail.service.js"

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export class MailApp extends React.Component {
    
    state = {
        mails: [],
        filterBy: null,
        // selectedMail: null
    }

    componentDidMount() {
        this.loadMails()
    }

    loadMails = () => {
        mailService.query(this.state.filterBy)
            .then((mails) => this.setState({ mails }))
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => {
            this.loadMails()
        })
    }

    render() {

        const { mails } = this.state
        return (
            <section>
            <MailFilter onSetFilter={this.onSetFilter} />
            <MailList mails={mails}/>
            </section>
        )
    }
}