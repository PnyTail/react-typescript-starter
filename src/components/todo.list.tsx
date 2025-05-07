import TodoData from "./todo.data";


const TodoList = () => {

    const todos = [
        {
            id: 1,
            title: "Learn React TypeScript",
            isComplete: false
        },
        {
            id: 2,
            title: "Watch anime",
            isComplete: true
        },
        {
            id: 3,
            title: "Read manga",
            isComplete: true
        },
    ]

    return (
        <div>
            <div>My todo list</div>
            <br />
            <TodoData
                todos={todos}
                owner={"Nam Hoang"}
                age={20}
                isDeveloper={true}
            />
        </div>
    )
}

export default TodoList;