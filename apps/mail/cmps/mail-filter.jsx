
export class MailFilter extends React.Component {

    state = {
        
        filterBy: {
            bySearch: '',
            isRead: ''
        }
    }

    inputRef = React.createRef()

    componentDidMount() {
        this.inputRef.current.focus()
    }

    handleChange = ({ target }) => {
        let field = target.name
        let value = target.value
        if(field === 'isRead') {
            if (value !== "all") {
                value = value === 'true'
            }
        }
        
        this.setState((prevState) => ({
            filterBy: {
                ...prevState.filterBy,
                [field]: value
            }
        }), () => { this.props.onSetFilter(this.state.filterBy) })
    }

    render() {
        const { bySearch, isRead } = this.state.filterBy
        return (
            <section className="filter-container">
            <form className="mails-filter">
                <label htmlFor="search"></label>
                <input
                    ref={this.inputRef}
                    type="text"
                    placeholder="Search..."
                    id="search"
                    name="bySearch"
                    value={bySearch}
                    onChange={this.handleChange} />

                <select
                    id="isRead"
                    name="isRead"
                    value={isRead}
                    onChange={this.handleChange}>
                    <option value='all'>All</option>
                    <option value={true}>Read</option>
                    <option value={false}>Unread</option>
                </select>
            </form>
            </section>
        )
    }
}