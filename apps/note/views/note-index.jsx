// DONE - gather icons
// DONE - create list that renders all the notes using GRID 
// DONE - gather assets needed to create app 
// DONE - gather colors
// DONE - create following components note-txt/ note-img/ note-video/ noto-todos 

// TODO - BONUS: note-audio/ note-canvas/ note-map
// TODO - there should be two types of lists if you have pinned notes they will be rendered at the top and the rest of notes will be underneath
// TODO - support duplicating a note
// TODO - App integration - allow a note to be sent directly to the compose email messge page using query params!
// ? BONUSES ================
// TODO - support drag and drop functionality
// TODO - BONUS: note-audio/ note-canvas/ note-map
// TODO - allow recording a note!

// todo - gather notes[{...}] meta data to render some basic content and skeleton
import NoteHeader from "../cmps/note-header.jsx"
import NoteList from "../cmps/note-list.jsx"

export class NoteIndex extends React.Component {
    render() {
        return (
            <div className="note-app" >
                <NoteHeader />
                <NoteList />
            </div>
        )
    }
}
