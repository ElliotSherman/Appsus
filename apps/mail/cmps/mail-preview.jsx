import { utilService } from "../../../services/util.service.js"
import { mailService } from "../services/mail.service.js"
import { LoadingSpinner } from "../../../cmps/spinner.jsx"

const { Link } = ReactRouterDOM

export function MailPreview({ mail, onRemove, onRestore }) {

    let linkTo = "/mail/" + mail.type + "/" + mail.id
    if (mail.type === "drafts") {
        linkTo = "/mail/compose/" + mail.id
    }

    function onToggleUnread(mail) {
        mailService.toggleUnread(mail)
            .then((isRead) => console.log('isRead:', isRead))
    }

    return (
        <section className="mail-preview">
            <Link to={linkTo}>
                <article className="mail-preview">
                    <h3>{mail.from}</h3>
                    <h3>{mail.subject}</h3>
                </article>
            </Link>
            <button className="toggle-is-read" onClick={() => {
                onToggleUnread(mail)
            }}>Read \ Unread
            </button>
            <button className="remove-mail" onClick={() => { onRemove(mail) }}>Remove
            </button>
            {
                mail.isRemoved && <button className="restore-mail" onClick={() => { onRestore(mail) }}>Restore
                </button>
            }
            <hr />
        </section>
    )
}