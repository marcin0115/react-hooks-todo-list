import { useState } from "react";

const AddTask = ()=> {
    const [task, setTask]= useState('');
    const [taskList, setTaskList]= useState([]);
    const [counter, setCounter]= useState(0);

    const handleChange = (e)=> setTask(e.target.value)

    const BtnAddTask = ()=> {
      if(task !== '') {
        const taskData = {
          value: task,
          id: counter,
          done: false,
        }
        setTaskList([...taskList, taskData])
        setCounter(counter + 1)
        setTask('')
      }
  }


const deleteTask = (e, id)=> {
  e.preventDefault();
  setTaskList(taskList.filter(task=> task.id !== id));
}

const doneTask = (e, id)=> {
  e.preventDefault();
  const taskIndex = taskList.findIndex(task=> task.id===id)
  const newTaskList = [...taskList];
  newTaskList[taskIndex] = {
    ...newTaskList[taskIndex],
    done: true,
  };
  setTaskList(newTaskList);
}

return (
  <div className="list">
    <input type="text" value={task} onChange={handleChange} id='text' placeholder="Add new task"/>
    <button className="addTask" onClick={BtnAddTask}>AddTask</button>

    <br/>
    {taskList !== [] ? <ul>{taskList.map(task=>
        <li key={task.id} className={task.done ? "crossText" : 'listTask'}>{task.value}

          <button className='delete' onClick={(e)=> deleteTask(e, task.id)}>Delete</button>

          <button className='done' onClick={(e)=> doneTask(e, task.id)}>Done</button>
        </li>
      )}</ul> : null}
  </div>
)
}

export default AddTask;