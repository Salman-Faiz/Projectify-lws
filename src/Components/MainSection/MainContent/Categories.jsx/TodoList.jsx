import sortSvg from '../../../../assets/Images/sortSvg.svg'
import Task from '../../Task';

const TodoList = () => {
    return (
  
        <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
          <div className="rounded-lg bg-indigo-600 p-4">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-lg font-semibold">To-Do (45)</h3>
             <img src={sortSvg} alt="" />
            </div>
           <Task />
  
         
          </div>
        </div>
    );
};

export default TodoList;

