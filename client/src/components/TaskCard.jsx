import { useNavigate } from "react-router-dom"

export function TasksCard({ task }) {

    const navigate = useNavigate()

    return (
        <div style={{background: "Black"}}
        onClick={() => {
            navigate(`/tasks/${task.id}`)
        }}
        >
            <h1>{ task.title }</h1>
            <p>{ task.description }</p>
            <hr />
        </div>
    )
}