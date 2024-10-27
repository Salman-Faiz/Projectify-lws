import { useContext, useState } from 'react'
import sortSvg from '../../../../assets/Images/sortSvg.svg'
import Task from '../../Task'
import { AddTaskContext } from '../../../../Context'



const OnProgress = () => {
  const { addTaskData, setAddTaskData } = useContext(AddTaskContext)
  const items = addTaskData.filter(task => task.category === 'Onprogress')
  const [isAscending, setIsAscending] = useState(true)

  const handleSortByDate = () => {
    setIsAscending(!isAscending)
  }
  // Sorted items based on isAscending state
  const sortedItems = [...items].sort((firstElement, secondElement) => {
    const firstElementDate = new Date(firstElement.date)
    const secondElementDate = new Date(secondElement.date)
    return isAscending
      ? firstElementDate - secondElementDate
      : secondElementDate - firstElementDate
  })

  return (
    <div className='mb-4 w-full px-2 sm:w-1/2 md:w-1/4'>
      <div className='rounded-lg bg-yellow-500 p-4'>
        <div className='mb-2 flex items-center justify-between'>
          <h3 id='onprogress' className='text-2xl font-semibold'>
            On Progress ({items.length})
          </h3>
          <img src={sortSvg} alt='' onClick={handleSortByDate} />
        </div>
        {items.length === 0 ? (
          <p className='text-black font-semibold text-xl'>
            Task List is empty!
          </p>
        ) : (
          sortedItems.map(task => (
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

export default OnProgress
