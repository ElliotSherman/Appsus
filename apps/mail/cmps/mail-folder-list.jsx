
export class FolderList extends React.Component {

    state = {

    }


    render() {

        return (
            <section className="folder-list">
                <div className="folders=btn">
                    <button className="btn-compose">Compose</button>
                    <button className="btn-inbox">Inbox</button>
                    <button className="btn-sent">Sent</button>
                    <button className="btn-drafts">Drafts</button>
                    <button className="btn-trash">Trash</button>
                </div>
            </section>
        )
    }

}
