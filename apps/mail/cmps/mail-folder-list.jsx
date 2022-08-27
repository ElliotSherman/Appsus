import { mailService } from '../services/mail.service.js'

const { NavLink } = ReactRouterDOM

export function FolderList() {

    return (
        <section className="folder-list">
            <div className="folders=btn">
                <hr />
                <nav>
                    <NavLink to="/mail/compose">Compose</NavLink>
                    <NavLink to="/mail/inbox">Inbox</NavLink>
                    <NavLink to="/mail/sent">Sent</NavLink>
                    <NavLink to="/mail/drafts">Drafts</NavLink>
                    <NavLink to="/mail/trash">Trash</NavLink>
                </nav>
            </div >
        </section >
    )

}