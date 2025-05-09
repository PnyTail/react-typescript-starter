import { useState } from "react";

interface ITodo {
    id: number;
    title: string;
    isComplete: boolean;
}

interface IProps {
    name?: string;
    addNewTodo: (value: ITodo) => void; // có thể viết tắt value là v
}

const TodoInput = (props: IProps) => {
    const { addNewTodo } = props;

    // string
    const [todo, setTodo] = useState<string>("");

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value);
    }

    function randomInteger(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleClick = () => {
        if (!todo) {
            alert("Please enter a todo");
            return;
        }

        addNewTodo({
            id: randomInteger(1, 1000000),
            title: todo,
            isComplete: false,
        });
        setTodo(""); // reset input
    }

    return (
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
            <input
                type="text"
                value={todo}
                onChange={handleTextChange}
            />
            <button onClick={handleClick}>Add todo</button>
        </div>
    )
}

export default TodoInput;