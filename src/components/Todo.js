import { useState } from "react"
import ListItem from "./ListItem";

export default function Todo() {

    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    const handleChange = (event) => {
        setTodo(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let tempList = todoList;

        tempList.push(todo);

        setTodoList(tempList);
        console.log(todoList)
        setTodo("");
    }

    return (<div>
        <form onSubmit={handleSubmit}>
            <input value={todo} onChange={handleChange} type="text" />
            <button type="submit">Add</button>
        </form>
        {todoList.map((item, index) => (
            <ListItem key={index} name={item} />
        ))}
        
    </div>)
}