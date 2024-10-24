
import { useState } from "react";
import MainSection from "./Components/MainSection/MainSection";
import Sidebar from "./Components/Sidebar";
import { AddTaskContext } from "./Context";


const App = () => {
const [addTaskData, setAddTaskData] = useState([])
  return (
    <AddTaskContext.Provider value={{addTaskData,setAddTaskData}}>
      <div className="bg-gray-900 text-white">
       <div className="flex h-screen">

      <Sidebar />
      <MainSection />
    </div>
    </div>
    </AddTaskContext.Provider>
  );
};

export default App;