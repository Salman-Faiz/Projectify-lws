
import DoneList from './DoneList'
import OnProgress from './OnProgress'
import ReviseList from './ReviseList'
import TodoList from './TodoList'


const Categories = () => {

  return (
    <div className='-mx-2 mb-6 flex flex-wrap'>
      <TodoList />

      <OnProgress />

      <DoneList />

      <ReviseList />
    </div>
  )
}

export default Categories
