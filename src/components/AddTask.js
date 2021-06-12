import { useState } from 'react'

const AddTask = ({onAdd}) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const saveTask = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add task');
      return;
    }

    onAdd({ text, day, reminder})
    setText('');
    setDay('');
    setReminder(false);
  }

  return (
    <form className='addForm' onSubmit={(e) => onAdd({ id: Math.random(), text: text, day: day, reminder: reminder}) }>
      <div className='form-control'>
        <label>Task</label>
        <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input type='text' placeholder='Add Day & Time' value={day} onChange={(e) => setDay(e.target.value)} />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
      </div>

      {/* <input type='submit' value='Save Task' className='btn btn-block' /> */}
      <button className='btn btn-block' onClick={saveTask}>Save</button>
    </form>
  )
}

export default AddTask
