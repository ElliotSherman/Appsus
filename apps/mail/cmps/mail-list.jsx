import { MailPreview } from "../cmps/mail-preview.jsx"

export function MailList({ mails, onRemove }) {

    return (
        <section className="mails-list">
            {mails.map(mail => <MailPreview
                onRemove={onRemove}
                mail={mail}
                key={mail.id} />)}
        </section>
    )
}