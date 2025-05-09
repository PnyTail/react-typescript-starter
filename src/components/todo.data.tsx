
// [1, 3, 4] : number[]

// interface definition ~ same as type definition
interface IProps {
    todos: {
        id: number;
        title: string;
        isComplete: boolean;
    }[];
    owner?: string;
    age?: number;
    isDeveloper?: boolean;

    deleteTodo: (v: number) => void; // viết tắt value là v
}

const TodoData = (props: IProps) => {
    const { todos, owner = "unknown", deleteTodo } = props;

    return (
        <div>
            {todos.map(item => {
                return (
                    <div key={item.id}>
                        <div style={{ padding: "10px 0" }}>
                            {item.id} - {item.title}
                            &nbsp;&nbsp;&nbsp;<button onClick={() => deleteTodo(item.id)}>Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoData;