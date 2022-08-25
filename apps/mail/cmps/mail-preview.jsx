import { mailService } from "../services/mail.service.js"

const { Link } = ReactRouterDOM

export function MailPreview({ mail, onRemove }) {

    return (
        <section className="mail-preview">
            <Link to={"/mail/" + mail.id}>
                <article className="mail-preview">
                    <h3>{mail.from}</h3>
                    <h3>{mail.subject}</h3>
                </article>
            </Link>
            <button className="toggle-is-read" onClick={() => {
                mailService.toggleUnread(mail)
            }}>Read \ Unread
            </button>
            <button className="remove-mail" onClick={() => { onRemove(mail) }}>Remove
            </button>
            <hr />
        </section>
    )
}