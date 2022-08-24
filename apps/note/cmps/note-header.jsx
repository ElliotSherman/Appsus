export default function NoteHeader() {
  return (
    <div className="flex align-center space-between note-header">
      {/* <i class="fa-solid fa-bars"></i> */}
      {/* <i class="fa-solid fa-ellipsis"></i> */}
      {/* <div className="header-notes "></div> */}
      <div className=" flex space-between note-header-ui ">
        <ul className="note-header-settings clean-list flex">
          <li className="note-settings-gear flex align-center justify-center">
            <i className="fa-solid fa-gear"></i>
          </li>
          <li className="note-setting-display flex align-center justify-center">
            <i className="fa-solid fa-grip-lines"></i>
          </li>
          <li className="note-settings-refresh flex align-center justify-center">
            <i className="fa-solid fa-arrow-rotate-right"></i>
          </li>
        </ul>

        <form className="flex note-header-search-form">
          <input
            className="note-search-form-input"
            type="search"
            placeholder="search"
          />
          <button className="note-search-form-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>

      <div className="flex note-header-title-container">
        <div className="flex note-header-title">
          <h1>Keep</h1>
          <div>
            <img src="../assets/img/keep-logo.png" />
          </div>
        </div>
      </div>
    </div>
  )
}
