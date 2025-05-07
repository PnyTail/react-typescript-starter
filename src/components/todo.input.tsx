
interface IProps {
    name?: string;
}

const TodoInput = (props: IProps) => {
    const { name = "hihi" } = props; // default value for name if not pass props

    return (
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
            <input value={name} type="text" />
            <button>Add todo</button>
        </div>
    )
}

export default TodoInput;