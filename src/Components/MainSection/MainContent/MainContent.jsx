

import { useState } from 'react';
import addIcon from '../../../assets/Images/AddTaskIcon.svg'
import AddTaskModal from '../../AddTaskModal/AddTaskModal'
import Categories from './Categories.jsx/Categories'


const MainContent = () => {

 

  const [addTaskModal,setAddTaskModal] = useState(false);

  const handleShowAddTask = () =>{
    setAddTaskModal(true);
  }
  const handleCloseAddTask = () =>{
    setAddTaskModal(false);
  }
  return (
    <>
    {
      addTaskModal && <AddTaskModal onClose={handleCloseAddTask}/>
    }
    <div className='mx-auto max-w-7xl p-6'>
      <div className='mb-6 flex items-center justify-between'>
        <h2 className='text-2xl font-bold'>Projectify</h2>
        <div className='flex space-x-2'>
          <a href="#" onClick={handleShowAddTask}>
          <button className='flex items-center rounded-md bg-gray-700 px-4 py-2 text-white'>
            <img src={addIcon} alt="" className='me-2'/>
            Add
          </button>
          </a>
        </div>
      </div>
      {/* categoris */}
      
      <Categories />
    </div>
    </>
    
  )
}

export default MainContent
