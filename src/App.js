import React from 'react';  // only if you want to delcare component class
import { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, []) // the last array is dependency array

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json()
    return data;
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json()
    return data;
  }
  
   const addTask = async (task) => {
     const res = await fetch(`http://localhost:5000/tasks`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
     })

    const data = await res.json()
    console.log(data);
    setTasks([...tasks, data]);

    // const id = Math.floor(Math.random() * 10000);
    // const newTask = { ...task, id: id }
    // setTasks([...tasks, newTask])
   }

   const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' })
     setTasks(tasks.filter((task) => task.id !== id));
   }

   const toggleReminder = async (id) => {
     const getTask = await fetchTask(id);
     const updTask = { ...getTask, reminder: !getTask.reminder }

     console.log(updTask)

     const res = await fetch(`http://localhost:5000/tasks/${id}`, {
       method: 'PUT',
       headers: {
        'Content-type': 'application/json'
       },
       body: JSON.stringify(updTask)
     })

     const data = await res.json()

     setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task))
   }

  return (
    <Router>
      <div className="container">
        <Header title="Task Tracker" onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />


        <Route path='/' exact render={(props) => (
          <>
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks'}
          </>
        )} />
        <Route path='/about' component={About} />
        <Footer/>      
      </div>
    </Router>
  );
}

// class App extends React.Component {
//   render() {
//     return  <div className="App">
//       <Header></Header>
//     </div>
//   }
// }

export default App;
