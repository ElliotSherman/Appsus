export default class TodoLi extends React.Component {
  state = {}

  handleClick = (e) => {
    console.log("clicked li", e)
  }
  render() {
    const { handleClick } = this
    const { todo } = this.props
    return (
      <li className="todo-li" onClick={() => handleClick(todo.text)}>
        {todo.doneAt ? (
          <span>
            <i className="far fa-square"></i>
          </span>
        ) : (
          <span>
            <i className="far fa-check-square"></i>
          </span>
        )}
        {todo.text}
      </li>
    )
  }
}
