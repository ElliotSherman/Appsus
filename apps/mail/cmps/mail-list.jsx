import { MailPreview } from "../cmps/mail-preview.jsx"

    export function MailList({ mails }) {

        return (
            <section className="mails-list">
                {mails.map(mail => <MailPreview
                    mail={mail}
                    key={mail.id}/>)}
            </section>
        )
    }