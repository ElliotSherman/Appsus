import { MailPreview } from "../cmps/mail-preview.jsx"

export function MailList({ mails, onRemove, onRestore }) {

    return (

        <section className="mails-list flex column">

            {mails.reverse().map(mail => <MailPreview
                onRemove={onRemove}
                onRestore={onRestore}
                mail={mail}
                key={mail.id} />)}

            {/* <div className="pages-conatiner">
                <button onClick="">Prev Page</button>
                <div className="page-idx-container">
                    <label className="page-idx">1</label>
                </div>
                <button onClick="">Next Page</button>
            </div> */}
        </section>
    )
}
