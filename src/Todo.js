import React from "react";
import List from "./List";
import "./Todo.css"

class Todo extends React.Component {

    constructor(){
        super();
        this.state = {
            term : "",
            items: []
        }
    }

   onChangeHandler = (e) => {
    this.setState({
        term : e.target.value
    })
   }

   onFormHandler = (e) => {
    e.preventDefault();
    this.setState({
        term : "",
        items : [...this.state.items, this.state.term]
    })
   }

   onDeleteHandler = (index) => {
     const deleteTask = [...this.state.items];
     deleteTask.splice(index,1);
     this.setState({
        items : deleteTask
     });
   }

    render(){
        return(
            
               <div>
                <form>
                <input 
                type = "text" 
                value = {this.state.term} 
                placeholder = "Write todo"
                required
                className="todo_input"
                onChange={this.onChangeHandler}
                />
                <button onClick={this.onFormHandler} className="add_btn"> ADD</button>
            </form>
            <List deleteTask = {this.onDeleteHandler} items = {this.state.items}/>
            
         </div>
        )
    }
}

export default Todo;