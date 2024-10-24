
import { useContext } from 'react';
import sortSvg from '../../../../assets/Images/sortSvg.svg'
import Task from '../../Task';
import { AddTaskContext } from '../../../../Context';



const TodoList = () => {
 
  const {addTaskData,setAddTaskData} = useContext(AddTaskContext);
 




    return (
  
        <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
          <div className="rounded-lg bg-indigo-600 p-4">
            <div className="mb-2 flex items-center justify-between">
              <h3 id='todo' className="text-lg font-semibold" >To-Do (54)</h3>
             <img src={sortSvg} alt="" />
            </div>
            {
              addTaskData.map((task,i) => <Task key={i} task={task}/>)
            }
           
  
         
          </div>
        </div>
    );
};

export default TodoList;

