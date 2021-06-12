import PropTypes from 'prop-types'
import Task from './Task'

const Tasks = (props) => {


  return (
    <>
     {props.tasks.map((task) => (
      // <h3 key={task.id}>{task.text}</h3>
      <Task key={task.id} task={task} onDelete={props.onDelete} onToggle={props.onToggle} />
     ))} 
    </>
  )
}

Tasks.defaultProps = {
  buttonColor: 'steelBlue'
}

Tasks.propTypes = {
  buttonColor: PropTypes.string,
  tasks: PropTypes.arrayOf(Object).isRequired
}

export default Tasks
