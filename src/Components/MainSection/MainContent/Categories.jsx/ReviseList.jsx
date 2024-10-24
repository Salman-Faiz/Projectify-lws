import { useContext } from 'react'
import sortSvg from '../../../../assets/Images/sortSvg.svg'
import Task from '../../Task'
import { AddTaskContext } from '../../../../Context'
const ReviseList = () => {
  const { addTaskData, setAddTaskData } = useContext(AddTaskContext)
  const items = addTaskData.filter(task => task.category === 'Revised')
  return (
    <div className='mb-4 w-full px-2 sm:w-1/2 md:w-1/4'>
      <div className='rounded-lg bg-rose-500 p-4'>
        <div className='mb-2 flex items-center justify-between'>
          <h3 id='revise' className='text-lg font-semibold'>
            Revise ({items.length})
          </h3>
          <img src={sortSvg} alt='' />
        </div>
        {items.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
}

export default ReviseList
