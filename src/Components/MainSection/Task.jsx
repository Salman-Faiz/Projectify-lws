/* eslint-disable react/prop-types */

import deleteIcon from '../../assets/Images/deleteIcon.svg'
import editIcon from '../../assets/Images/editIcon.svg'

const Task = ({ task, addTaskData, setAddTaskData}) => {
  const { taskName, description, date, category, id } = task
  

  const handleDeleteTask = (event, itemId) => {
    event.preventDefault()
    const filteredItem = addTaskData.filter(item => {
      return item.id !== itemId
    })
    setAddTaskData([...filteredItem])
  }
//   task color change based on category
const categoryColor = {
    Todo: 'text-indigo-500',
    Onprogress: 'text-yellow-500',
    Done: 'text-teal-500',
    Revised: 'text-rose-500',
  };
  
  
  return (
    <div className='mb-4 rounded-lg bg-gray-800 p-4'>
      <div className='flex justify-between'>
      <h4 className={`mb-2 flex-1 font-semibold text-2xl ${categoryColor[category] }`}>
          {taskName || 'Unnamed Task'}
        </h4>


        <div className='flex gap-2 w-6 me-5'>
          <img
            src={deleteIcon}
            alt='Delete Task'
            onClick={e => handleDeleteTask(e, id)}
          />
          <img src={editIcon} alt='Edit Task' />
        </div>
      </div>

      <p className='mb-2 text-xl text-zinc-200'>
        {description || 'No description provided'}
      </p>

      <p className='mt-6 text-md text-zinc-400'>
        {date || 'No date available'}
      </p>
    </div>
  )
}

export default Task
