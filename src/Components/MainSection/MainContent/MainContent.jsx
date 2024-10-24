import addTaskIcon from '../../../assets/Images/AddTaskIcon.svg'
import DoneList from './Categories.jsx/DoneList'
import OnProgress from './Categories.jsx/OnProgress'
import ReviseList from './Categories.jsx/ReviseList'
import TodoList from './Categories.jsx/TodoList'

const MainContent = () => {
  return (
    <div class="mx-auto max-w-7xl p-6">
    <div class="mb-6 flex items-center justify-between">
      <h2 class="text-2xl font-bold">Projectify</h2>
      <div class="flex space-x-2">
        <button
          class="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="mr-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z"
            />
            <path d="M15 12h-6" />
            <path d="M12 9v6" />
          </svg>
          Add
        </button>
      </div>
    </div>

    <div class="-mx-2 mb-6 flex flex-wrap">



    <TodoList />

   <OnProgress />

      <DoneList />

     <ReviseList />



    </div>
  </div>
  )
}

export default MainContent
