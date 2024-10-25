import { useContext } from 'react'
import sortSvg from '../../../../assets/Images/sortSvg.svg'
import Task from '../../Task'
import { AddTaskContext } from '../../../../Context'

const TodoList = () => {
  const { addTaskData, setAddTaskData } = useContext(AddTaskContext)
  const items = addTaskData.filter(task => task.category === 'Todo')

  // console.log(items.length)
  return (
    <div className='mb-4 w-full px-2 sm:w-1/2 md:w-1/4'>
      <div className='rounded-lg bg-indigo-600 p-4'>
        <div className='mb-2 flex items-center justify-between'>
          <h3 id='todo' className='text-2xl font-semibold'>
            To-Do ({items.length})
          </h3>
          <img src={sortSvg} alt='' />
        </div>
        {items.length === 0 ? (
          <p className='text-red-400 font-semibold text-xl'>
            Task List is empty!
          </p>
        ) : (
          items.map(task => (
            <Task
              key={task.id}
              task={task}
              addTaskData={addTaskData}
              setAddTaskData={setAddTaskData}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default TodoList
