import { useState } from 'react'
import MainSection from './Components/MainSection/MainSection'
import Sidebar from './Components/Sidebar'
import { AddTaskContext } from './Context'

const App = () => {
  const [addTaskData, setAddTaskData] = useState([])
  const [editTask, setEditTask] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openEditModal = () => setIsModalOpen(true)
  const closeEditModal = () => {
    setEditTask(null) // Clear edit data when closing the modal
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
