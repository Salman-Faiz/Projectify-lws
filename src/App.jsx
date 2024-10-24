import Header from "./Components/MainSection/Header";
import MainSection from "./Components/MainSection/MainSection";
import Sidebar from "./Components/Sidebar";


const App = () => {
  return (
    <div className="bg-gray-900 text-white">
       <div className="flex h-screen">

      <Sidebar />
      <MainSection />
    </div>
    </div>
  );
};

export default App;