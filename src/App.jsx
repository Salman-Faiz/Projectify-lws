import { useState } from 'react'
import MainSection from './Components/MainSection/MainSection'
import Sidebar from './Components/Sidebar'
import { AddTaskContext } from './Context'

const App = () => {
  const [addTaskData, setAddTaskData] = useState([])
  const [editTask, setEditTask] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchData,setSearchData] = useState('')
  

  const openEditModal = () => setIsModalOpen(true)
  const closeEditModal = () => {
    setEditTask(null) // when closing the modal clear the edit data
    setIsModalOpen(false)
  }

  return (
    <AddTaskContext.Provider
      value={{
        addTaskData,
        setAddTaskData,
        editTask,
        setEditTask,
        isModalOpen,
        openEditModal,
        closeEditModal,
        setIsModalOpen,
        searchData,
        setSearchData,
       
      }}
    >
      <div className='bg-gray-900 text-white'>
        <div className='flex h-screen'>
          <Sidebar />
          <MainSection />
        </div>
      </div>
    </AddTaskContext.Provider>
  )
}

export default App
