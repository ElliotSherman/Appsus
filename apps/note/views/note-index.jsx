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
import AddNote from "../cmps/add-note.jsx"
import NoteHeader from "../cmps/note-header.jsx"
import NoteList from "../cmps/note-list.jsx"
import { noteService } from "../services/note.service.js"

export class NoteIndex extends React.Component {
    state = {
        notes:[],
        filterBy:{

        }
    }
    componentDidMount(){
        this.loadNotes()
    }

    loadNotes=()=>{
        noteService.query(this.state.filterBy).then((notes)=>{
            return this.setState({filterBy},() =>{
                this.loadNotes()
            })
        })
    }
    render() {
        const {notes}=this.state
        return (
            <div className="note-app" >
                <NoteHeader />
                <AddNote />
                <NoteList notes={notes}/>
            </div>
        )
    }
}
