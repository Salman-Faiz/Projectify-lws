/* eslint-disable react/prop-types */

import deleteIcon from '../../assets/Images/deleteIcon.svg';
import editIcon from '../../assets/Images/editIcon.svg';

const Task = ({ task }) => {
  if (!task) {
    return <p>Task data is not available</p>;
  }


  const { taskName, description, date, category } = task;
  console.log(category)

  return (
    
    <div className="mb-4 rounded-lg bg-gray-800 p-4">
      <div className="flex justify-between">
        <h4 className="mb-2 flex-1 font-semibold text-indigo-500">
          {taskName || 'Unnamed Task'} 
        </h4>

        <div className="flex gap-2 w-6 me-5">
          <img src={deleteIcon} alt="Delete Task" />
          <img src={editIcon} alt="Edit Task" />
        </div>
      </div>

      <p className="mb-2 text-sm text-zinc-200">
        {description || 'No description provided'}
      </p>

      <p className="mt-6 text-xs text-zinc-400">
        {date || 'No date available'} 
      </p>
    </div>
  );
};

export default Task;
