const { Link, NavLink, withRouter } = ReactRouterDOM

export function AppHeader() {
    return <header className="app-header">
        <Link to="/">
            <h3>LOGO!</h3>
        </Link>
        <nav>
            <NavLink to="/notes">Notes</NavLink>
            <NavLink to="/mail/inbox">Mail</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink exact to="/">Home</NavLink>
        </nav>
    </header>
}
