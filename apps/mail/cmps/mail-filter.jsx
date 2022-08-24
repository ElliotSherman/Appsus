
export class MailFilter extends React.Component {

    state = {

        filterBy: {
            bySearch: '',
            isRead: false
        }
    }

    inputRef = React.createRef()

    goSearch = () => {
        this.inputRef.current.focus()
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        console.log('value:', value);
        this.setState((prevState) => ({
            filterBy: {
                ...prevState.filterBy,
                [field]: value
            }
        }), () => { this.props.onSetFilter(this.state.filterBy) })
    }

    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }

    render() {
        const { bySearch, isRead } = this.state.filterBy
        return (
            <form className="books-filter" onSubmit={this.onFilter}>
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
                    <option value=''>All</option>
                    <option value={true}>Read</option>
                    <option value={false}>Unread</option>
                </select>
            </form>
        )
    }
}