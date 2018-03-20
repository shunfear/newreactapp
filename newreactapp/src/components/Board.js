import React, {Component} from 'react'
import Note from './Note'

class Board extends React.Component{
    constructor(props){
        super(props)
        this.eachNote= this.eachNote.bind(this)
        this.state={
            notes:[
                {
                    id:20,
                    note: "Pay Kaiser Bill"
                },
                {
                    id:21,
                    note: "remember to call mom"
                },
                {
                    id: 12,
                    note: "fix the dishwasher"
                }
            ]
        }
}
eachNote(note, i){
        return(
            <Note key={i} index={i}>
                {note.note}
            </Note>
        )
}
    render(){
        return(
            <div id="board">
                {this.state.notes.map(this.eachNote)}
            </div>
        )
    }
}
export default Board