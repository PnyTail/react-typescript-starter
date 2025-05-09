import { useState } from "react";

interface IProps {
    name?: string;
}

const TodoInput = (props: IProps) => {
    // string
    const [todo, setTodo] = useState<string>("");

    return (
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
            <input type="text" />
            <button>Add todo</button>
        </div>
    )
}

export default TodoInput;