// DONE - gather icons
// TODO - create following components note-txt/ note-img/ note-video/ noto-todos BONUS: note-audio/ note-canvas/ note-map
// TODO - the should have to types of list if you have pinned notes they will be rendered at the top the rest of notes will be underneath
// TODO - support duplicating a note

// TODO - App integration - allow a note to be sent directly to the compose email messge page using query params!
// DONE BONUSES
// TODO - support drag and drop functionality
// TODO - BONUS: note-audio/ note-canvas/ note-map
// TODO - allow recording a note!

// in progress - create list that renders all the notes using GRID 
// in progress - gather assets needed to create app 
// in progress - gather colors
// todo - gather notes[{...}] meta data to render some basic content and skeleton
import NoteHeader from "../cmps/note-header.jsx"
import NoteList from "../cmps/note-list.jsx"

export class NoteIndex extends React.Component {
    render() {
        return (
            <div className="note-app" style={{fontFamily:'product-sans' , fontSize:'22px',color:'var(--font-clr)'}}>
                {/* Keep */}
                {/* <i class="fa-solid fa-magnifying-glass" style={{color:'red'}}></i> */}
                <NoteHeader />
                <NoteList />
            </div>
        )
    }
}
