
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
}

const TodoData = (props: IProps) => {
    const { todos, owner = "unknown" } = props;
    return (
        <div>
            {todos.map(item => {
                return (
                    <div key={item.id}>
                        <div style={{ padding: "10px 0" }}>{item.title}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoData;