import Header from "./Header";
import MainContent from "./MainContent/MainContent";


const MainSection = () => {
    return (
        <main className="flex-1 overflow-y-auto overflow-x-hidden">

        <Header />
        <MainContent />
  
        </main>
    );
};

export default MainSection;