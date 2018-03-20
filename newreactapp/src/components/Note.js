import React, {Component} from 'react'

class Note extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            editing: false
        }
        this.edit = this.edit.bind(this)
        this.remove = this.remove.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)
        this.renderForm= this.renderForm.bind(this)
        this.save = this.save.bind(this)
    }
    edit(){
       this.setState({
           editing: true
       })
    }
    remove(){
        alert("removing")
    }
    save(){
        alert(this._newText.value)
    }
renderForm(){
        return (
            <div className="note">
                <form action="">
                    <textarea ref={input=> this._newText = input}/>
                </form>
                <input type="submit" value="Save" onClick={this.save}/>
            </div>
        )
}
    renderDisplay(){
        return (
            <div id="note">
                <p className="nota">{this.props.children}</p>
                <span className="btn-container">
                    <button id="edit" onClick={this.edit}>Edit</button>
                <button onClick={this.remove} id="remove">Remove</button>
                </span>

            </div>
        )
    }
    render(){
       return this.state.editing ? this.renderForm() : this.renderDisplay()
    }
}
export default Note