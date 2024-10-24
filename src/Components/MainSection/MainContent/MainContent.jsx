import { useState } from 'react'
import DoneList from './Categories.jsx/DoneList'
import OnProgress from './Categories.jsx/OnProgress'
import ReviseList from './Categories.jsx/ReviseList'
import TodoList from './Categories.jsx/TodoList'
import addIcon from '../../../assets/Images/AddTaskIcon.svg'
import AddTaskModal from '../../AddTaskModal/AddTaskModal'

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
      <div className='-mx-2 mb-6 flex flex-wrap'>
        <TodoList />

        <OnProgress />

        <DoneList />

        <ReviseList />
      </div>
    </div>
    </>
    
  )
}

export default MainContent
