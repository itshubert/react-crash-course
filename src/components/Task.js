import { FaTimes } from 'react-icons/fa';

const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h5>
        {task.text}
        <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)}/>
      </h5>
      <div>{task.day}</div>
    </div>
  )
}

export default Task

