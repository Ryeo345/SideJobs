import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link , useNavigate } from 'react-router-dom';
import {updateTask, updateUser, updateAuth} from "../store";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const MyTasks = () => {
  const { users, auth, tasks } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let filteredTasks = tasks.filter((task) => task.userId === auth.id);

    const update = async(task) => {
        const taskDoer = users.find((user) => user.id === task.taskDoerId);
        await dispatch(updateTask({id: task.id, isComplete: true}));
        await dispatch(updateUser({id: taskDoer.id, wallet: taskDoer.wallet + task.price}));
        await dispatch(updateAuth({id: auth.id, wallet: auth.wallet - task.price}));
        navigate('/myTasks')
    }
    return (
        <div className='myTasks-page-layout'>
            <Typography variant='h4'>Created Jobs</Typography>
                {
                    filteredTasks.map(task => {
                        return (
                            <div className='myTasks-container' key={task.id}>
                                <Link to={`/tasks/${task.id}`}>
                                    <div className = 'task-title'>Title: {task.title}</div>
                                    <div className = 'task-price'>Price: ${task.price}</div>
                                    <div className = 'task-location'>Location: {task.city}, {task.state}</div>
                                </Link>
                                { task.isComplete ? <CheckCircleIcon /> : task.taskDoerId ? <button onClick={() => update(task)}>Task Complete</button> : ""}
                            </div>
                        )
                    })
                }
        </div>
    )
}

export default MyTasks;