import React from "react";

let todoList = [];

function List(props){
    
    if (todoList.length < 1) {
        return "";
    }

    return (
        <div className="List">
            <ol>
                { todoList.map(list => <li>{list}</li>) }
            </ol>
        </div>
    )
}

function ToDoList(){
    const [newTask, setTask] = React.useState('');
    
    if (newTask != '') {
        {todoList.push(newTask)}
    }

    return (
        <>
            <div className="App">
                <h1>What to do today?</h1>

                <input type="text" id="task_title" />
                <button onClick={ () => setTask(document.getElementById("task_title").value) }>Add Task</button>
            </div>

            <List />
        </>
    );
}

export default ToDoList;