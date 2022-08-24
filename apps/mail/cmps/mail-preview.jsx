import { mailService } from "../services/mail.service.js"

const { Link } = ReactRouterDOM


export function MailPreview({ mail }) {

    return (
        <Link to={"/mail/" + mail.id}>
            <article className="mail-preview">
                <button  className="toggle-is-read" onClick={() => {
                mailService.toggleUnread(mail)}}>Read \ Unread
                </button>
                <button  className="remove-mail" onClick={() => {
                mailService.removeMail(mail.id)}}>Remove
                </button>
                <h3>{mail.from}</h3>
                <h3>{mail.subject}</h3>
                <hr />
            </article>
        </Link>
    )
}