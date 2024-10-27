/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import sortSvg from '../../../../assets/Images/sortSvg.svg';
import Task from '../../Task';
import { AddTaskContext } from '../../../../Context';

const TodoList = () => {
  const { addTaskData, setAddTaskData,searchData } = useContext(AddTaskContext);
  
  // Filter tasks by category
  const items = addTaskData.filter(task => task.category === 'Todo');
  
  // Sorting state
  const [isAscending, setIsAscending] = useState(true);

  const handleSortByDate = () => {
    setIsAscending(!isAscending);
  };

  // Sort items based on isAscending state
  const sortedItems = [...items].sort((firstElement, secondElement) => {
    const firstElementDate = new Date(firstElement.date);
    const secondElementDate = new Date(secondElement.date);
    return isAscending
      ? firstElementDate - secondElementDate
      : secondElementDate - firstElementDate;
  });

  // Filter sorted items based on searchData
  const filteredItems = sortedItems.filter(task =>
    task.taskName.toLowerCase().includes(searchData.toLowerCase())
  );

  return (
    <div className='mb-4 w-full px-2 sm:w-1/2 md:w-1/4'>
      <div className='rounded-lg bg-indigo-600 p-4'>
        <div className='mb-2 flex items-center justify-between'>
          <h3 id='todo' className='text-2xl font-semibold'>
            To-Do ({filteredItems.length})
          </h3>
          <img src={sortSvg} alt='Sort' onClick={handleSortByDate} />
        </div>
        {filteredItems.length === 0 ? (
          <p className='text-red-400 font-semibold text-xl'>
            Task List is empty!
          </p>
        ) : (
          filteredItems.map(task => (
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
  );
};

export default TodoList;
