import { MailFilter } from "../cmps/mail-filter.jsx"
import { MailList } from "../cmps/mail-list.jsx"
import { mailService } from "../services/mail.service.js"
import { FolderList } from "../cmps/mail-folder-list.jsx"

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

    onRemove = (mail) => {
        mailService.removeMail(mail)
            .then(() => this.loadMails())
    }

    // onToggleRead = (mail) => {
    //     mailService.removeMail(mail)
    //         .then(() => this.loadMails())
    // }

    render() {

        const { mails } = this.state
        return (
            <section className="mail-app">
                <MailFilter onSetFilter={this.onSetFilter} />
                <FolderList />
                <MailList mails={mails} onRemove={this.onRemove} />
            </section>
        )

    }
}