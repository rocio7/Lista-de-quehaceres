import React, { useState } from 'react';
import './Tarea.css'

const Tarea = () => {
        const [task, setTask] = useState('');
        const [listTask, setListTask] = useState([]);
        
        const NewTask = (e) => 
        {
            e.preventDefault();
            if(task === '') return;
            setListTask
            (
                [...listTask, 
                    {
                        Task: task,
                        Completed: false
                    }
                ]
            );
            console.log("List Task", listTask);
            setTask('');
        }
    
        const checked = (index) => 
        {
            const tarea = 
            {
            ...listTask[index]
            }
        
            tarea.Completed = !tarea.Completed;
        
            setListTask
            (
                [...listTask.slice(0, index),tarea].concat(listTask.slice(index + 1))
            )
        }
    
        const removeTask = (index) =>  
        {
            setListTask(listTask.filter((_item, i) => i !== index));
        }
    
        return (
            <div>
                <form className='row g-3 marg' onSubmit={NewTask}>
                    <div className='col-11'>
                        <input className='form-control' onChange={e => setTask(e.target.value)}value={task}/>
                    </div>
                    <div className='col-1'>
                        <button type="submit" className='btn btn-primary mb-3'>Add</button>
                    </div>
                </form>
                {
                    listTask.map 
                    (
                        (item, i) => 
                        (
                            <div className='row d-flex align-items-center margin'>
                                <div className='col-1'>
                                    <span className={item.Completed === true ? "taskCompleted": "taskIncompleted"}>{item.Task}</span>
                                </div>
                                <div className='col-1'>
                                    <input type="checkbox" checked={item.Completed} onClick={() => checked(i)}/>
                                </div>
                                <button className='btn btn-dark' onClick={() => removeTask(i)}>Delete</button>
                            </div>
                        )
                    )
                }
            </div>
        )
    };np
    
export default Tarea;