/* eslint-disable react/prop-types */
import { useContext, useState } from 'react'
import { AddTaskContext } from '../../Context'

const AddTaskModal = ({ onClose }) => {
  const { addTaskData, setAddTaskData, editTask, setEditTask } =
    useContext(AddTaskContext)

  // Set initial state based on edit or new task
  const [taskName, setTaskName] = useState(editTask?.taskName || '')
  const [description, setDescription] = useState(editTask?.description || '')
  const [dueDate, setDueDate] = useState(editTask?.date || '')
  const [category, setCategory] = useState(editTask?.category || 'Todo')

  const handleTaskData = event => {
    event.preventDefault()

    const updatedTask = {
      id: editTask?.id || crypto.randomUUID(),
      taskName,
      description,
      date: dueDate,
      category,
    }

    // Update or add task to the list
    if (editTask) {
      // Edit existing task
      const updatedTasks = addTaskData.map(task =>
        task.id === editTask.id ? updatedTask : task
      )
      setAddTaskData(updatedTasks)
      onClose() // Close the modal
    } else {
      // Add new task
      setAddTaskData([...addTaskData, updatedTask])
    }

    // Reset form values
    setTaskName('')
    setDescription('')
    setDueDate('')
    setCategory('Todo')

    // Show success alert
    window.alert('Task has been successfully added!')

    // Reset editTask to null after saving
    setEditTask(null)
  }

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-900/70 p-4 text-white fixed top-0 left-0 w-screen h-screen z-50 backdrop-blur-md'>
      <div className='w-full max-w-md rounded-lg bg-gray-800 shadow-xl'>
        <div className='p-6 text-xl'>
          <h2 className='mb-6 text-3xl font-bold text-green-400'>
            {editTask ? 'Edit Task' : 'Create Task'}
          </h2>
          {/* task form */}
          <form onSubmit={handleTaskData}>
            <div className='mb-4'>
              <label
                htmlFor='taskName'
                className='mb-1 block text-xl font-medium text-gray-300'
              >
                Task Name
              </label>
              <input
                type='text'
                id='taskName'
                name='taskName'
                required
                value={taskName}
                onChange={e => setTaskName(e.target.value)}
                className='w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 '
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='description'
                className='mb-1 block text-xl font-medium text-gray-300'
              >
                Description
              </label>
              <textarea
                id='description'
                name='description'
                required
                rows='3'
                value={description}
                onChange={e => setDescription(e.target.value)}
                className='w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500'
              ></textarea>
            </div>
            <div className='mb-4'>
              <label
                htmlFor='dueDate'
                className='mb-1 block text-xl font-medium text-gray-300'
              >
                Due Date
              </label>
              <input
                type='date'
                id='dueDate'
                name='dueDate'
                required
                value={dueDate}
                onChange={e => setDueDate(e.target.value)}
                className='w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500'
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='category'
                className='mb-1 block text-xl font-medium text-gray-300'
              >
                Category
              </label>
              <select
                id='category'
                name='category'
                required
                value={category}
                onChange={e => setCategory(e.target.value)}
                className='w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500'
              >
                <option value='Todo'>To-Do</option>
                <option value='Onprogress'>On Progress</option>
                <option value='Done'>Done</option>
                <option value='Revised'>Revised</option>
              </select>
            </div>

            <div className='flex justify-end space-x-3'>
              <button
                type='button'
                className='rounded-md border border-gray-600 px-4 py-2 font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800 text-xl'
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type='submit'
                className='rounded-md border border-transparent bg-green-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800 text-xl'
              >
                {editTask ? 'Update Task' : 'Create Task'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddTaskModal
