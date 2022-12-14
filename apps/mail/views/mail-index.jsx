import { MailDetails } from "../cmps/mail-details.jsx"
import { MailApp } from "../cmps/mail-app.jsx"
import { MailCompose } from "../cmps/mail-compose.jsx"
import { FolderList } from "../cmps/mail-folder-list.jsx"

const { Route, Switch } = ReactRouterDOM

export class MailIndex extends React.Component {
    render() {
        return (
            <section className="mail-index flex">
                <FolderList />
                <Switch>
                    <Route path="/mail/compose/:draftId?" component={MailCompose} />
                    <Route path="/mail/:folder/:mailId" component={MailDetails} />
                    <Route path="/mail/:folder" component={(props) => {
                        return <MailApp {...props} folder={props.match.params.folder} />
                    }} />
                </Switch>
            </section>
        )
    }
}