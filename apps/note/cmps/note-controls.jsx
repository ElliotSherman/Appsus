
export default function NoteControls() {
  return (
    <div>
        <button onClick={(ev)=>{
            ev.preventDefault()
            console.log('Clicked note control')}}>save</button>
    </div>
  )
}
