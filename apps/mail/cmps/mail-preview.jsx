const { Link } = ReactRouterDOM

export function MailPreview({ mail }) {

    return (
        <Link to={"/mail/" + mail.id }>
            <article className="mail-preview">
                <h3>subject: {mail.subject}</h3>
                {/* <h3>id: {mail.id}</h3> */}
                {/* <h3>isRead: {mail.isRead}</h3> */}
                {/* <h3>body: {mail.body}</h3> */}
                {/* <h3>sendAt: {mail.sendAt}</h3> */}
                {/* <h3>to: {mail.to}</h3> */}
                <hr/>
            </article>
        </Link>
    )
}