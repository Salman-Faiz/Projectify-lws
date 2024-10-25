/* eslint-disable react/prop-types */

import { useContext } from 'react'
import deleteIcon from '../../assets/Images/deleteIcon.svg'
import editIcon from '../../assets/Images/editIcon.svg'
import { AddTaskContext } from '../../Context'

const Task = ({ task, addTaskData, setAddTaskData }) => {
  const { setEditTask, setIsModalOpen } = useContext(AddTaskContext)
  const { taskName, description, date, category, id } = task
  // handle edit
  const handleOpenModal = (event, task) => {
    setIsModalOpen(true)
    setEditTask(task) // Pass the entire task object for editing
  }

  //   handle delete
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
  }

  return (
    <div className='mb-4 rounded-lg bg-gray-800 p-4'>
      <div className='flex justify-between'>
        <h4
          className={`mb-2 flex-1 font-semibold text-2xl ${categoryColor[category]}`}
        >
          {taskName}
        </h4>

        <div className='flex gap-2 w-6 me-5'>
          <img
            src={deleteIcon}
            alt='Delete Task'
            onClick={e => handleDeleteTask(e, id)}
          />

          <img
            src={editIcon}
            alt='Edit Task'
            onClick={() => handleOpenModal(id, task)} // Pass task data here
          />
        </div>
      </div>

      <p className='mb-2 text-xl text-zinc-200'>{description}</p>

      <p className='mt-6 text-md text-zinc-400'>{date}</p>
    </div>
  )
}

export default Task
