import { useContext } from 'react'
import CategoryInput from './CategoryInput'
import Description from './Description'
import InputDate from './InputDate'
import TaskInput from './TaskInput' // Capitalize 'TaskInput'
import { AddTaskContext } from '../../Context'

/* eslint-disable react/prop-types */
const AddTaskModal = ({ onClose }) => {
   
  const { addTaskData, setAddTaskData } = useContext(AddTaskContext)

  const handleTaskData = event => {
    event.preventDefault()
    const form = event.target
    const taskName = form.taskName?.value // Ensure form input name is correct
    const description = form.description?.value
    const dueDate = form.dueDate?.value
    const category = form.category?.value

    console.log('from add task', taskName, description, dueDate, category)
    const formData = {
        id: crypto.randomUUID(),
        taskName, 
        description,
        date: dueDate,
        category: category,
      };
    console.log("from add task modal", formData)

   
    setAddTaskData([...addTaskData, formData]);
  }

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-900 p-4 text-white'>
      <div className='w-full max-w-md rounded-lg bg-gray-800 shadow-xl'>
        <div className='p-6'>
          <h2 className='mb-6 text-2xl font-bold text-green-400'>
            Create Task
          </h2>
          {/* task form */}
          <form onSubmit={handleTaskData}>
            <TaskInput />
            <Description />
            <InputDate />
            <CategoryInput />

            <div className='flex justify-end space-x-3'>
              <button
                type='button'
                className='rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800'
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type='submit'
                className='rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800'
              >
                Create Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddTaskModal
