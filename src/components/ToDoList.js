//Import Components
import ToDo from "./ToDo";

function ToDoList({ setToDos, toDos, filteredToDos, page }) {
    return (
        <div className = "todo-container">
            <ul className = "todo-list">
                {filteredToDos.map(toDo => {
                    console.log("toDo.page = " + toDo.page)
                    console.log("page = " + page)
                    if (toDo.page == page){
                        return (
                            <ToDo
                                toDo={toDo}
                                setToDos={setToDos} 
                                toDos={toDos} 
                                key={toDo.id} 
                                text={toDo.text}
                            />
                        )
                    }
                })}
            </ul>
        </div>
    );   
}

export default ToDoList;