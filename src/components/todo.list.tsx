import { useState } from "react";
import TodoData from "./todo.data";
import TodoInput from "./todo.input";

interface ITodo {
    id: number;
    title: string;
    isComplete: boolean;
}

const TodoList = () => {

    // const todos = [
    //     {
    //         id: 1,
    //         title: "Learn React TypeScript",
    //         isComplete: false
    //     },
    //     {
    //         id: 2,
    //         title: "Watch anime",
    //         isComplete: true
    //     },
    //     {
    //         id: 3,
    //         title: "Read manga",
    //         isComplete: true
    //     },
    // ]

    const [todoList, setTodoList] = useState<ITodo[]>([]);

    const addNewTodo = (todo: ITodo) => {
        setTodoList([...todoList, todo]);
    }

    const deleteTodo = (id: number) => {
        const newTodoList = todoList.filter(item => item.id !== id); // chỉ lấy những item có id khác với id truyền vào
        setTodoList(newTodoList);
    }

    return (
        <div style={{
            width: "600px",
            margin: "50px auto",
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "20px",
        }}>
            <div
                style={{
                    padding: "10px 0",
                    borderBottomWidth: "1px",
                    borderBottomColor: "#ccc",
                    borderBottomStyle: "solid",
                }}
            >
                My todo list
            </div>
            <br />
            <TodoInput
                name="Your todo"
                addNewTodo={addNewTodo}
            />
            <TodoData
                todos={todoList}
                deleteTodo={deleteTodo}
            // owner={"Nam Hoang"}
            // age={20}
            // isDeveloper={true}
            />
        </div>
    )
}

export default TodoList;