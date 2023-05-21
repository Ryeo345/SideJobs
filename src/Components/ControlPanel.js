import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser, fetchUsers, deleteTask } from '../store';

const ControlPanel = () => {
  const { auth, users, tasks } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleDeleteUser = (user) => {
    dispatch(deleteUser(user))
      .then(() => {
        dispatch(fetchUsers());
      })
      .catch((error) => {
        console.log('Error deleting user:', error);
      });
  };

  const handleDeleteTask = (task) => {
    dispatch(deleteTask(task))
      .then(() => {
        dispatch(fetchTasks());
      })
      .catch((error) => {
        console.log('Error deleting task:', error);
      });
  };

  return (
    <div>
      <h1>Control Panel</h1>
      <h2>Welcome Admin {auth.firstName}</h2>
      <div>
        <h3>User Management</h3>
        {users.map((user) => (
          <div key={user.id}>
            <div>
              <Link to={`/users/${user.id}`}>
                {user.firstName} {user.lastName}
              </Link>
            </div>
            {!user.isAdmin && (
              <div>
                <button onClick={() => handleDeleteUser(user)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div>
        <h3>Task Management</h3>
        {tasks.map((task) => (
          <div key={task.id}>
              {task.id}
              {"   "}
              {task.title}
              <button onClick={() => handleDeleteTask(task)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ControlPanel;