import { MailFilter } from "../cmps/mail-filter.jsx"
import { MailList } from "../cmps/mail-list.jsx"
import { mailService } from "../services/mail.service.js"
import { LoadingSpinner } from "../../../cmps/spinner.jsx"

const Router = ReactRouterDOM.HashRouter
const { Route, Switch, NavLink } = ReactRouterDOM

export class MailApp extends React.Component {

    state = {
        mails: null,
        filterBy: null,
    }
    
    componentDidMount() {
        this.loadMails()
    }

    loadMails = () => {
        console.log('this.props.folder:', this.props.folder);
        mailService.query(this.state.filterBy, this.props.folder)
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
    
    onRestore = (mail) => {
        mailService.restoreMail(mail)
        .then(() => this.loadMails())
    }

    render() {
        const { mails } = this.state
        
        if (!mails) {

            return <div><LoadingSpinner /></div>
        }
        
        return (
            <section className="mail-app">
                <MailFilter onSetFilter={this.onSetFilter} />
                <hr/>
                <MailList mails={mails} onRestore={this.onRestore} onRemove={this.onRemove} />
            </section>
        )
    }
}

