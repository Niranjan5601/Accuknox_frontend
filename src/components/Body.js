
import { useSelector } from "react-redux";
import Dashboard from "./Dashboard";
import Header from "./Header";
import Sidebar from "./SideBar";




const Body = () => {
    const toggleSidebarSelector = useSelector((store) => store.toggleSidebar.toggleSidebar);



    return (
        <div className="bg-[#f0f5fa] min-h-screen flex relative">
            
            
            {toggleSidebarSelector && (
                <>
                    <div
                        className={`fixed top-0 right-0 h-full  z-50 transform transition-transform duration-300 ease-in-out ${
                            toggleSidebarSelector ? 'translate-x-0' : 'translate-x-full'
                        } w-[700px] `}  
                    >
                        <Sidebar />
                    </div>

                    <div
                        className="fixed inset-0 bg-black opacity-50 z-40"
                        
                    ></div>
                </>
            )}

           
            <div className={`flex-1 ${toggleSidebarSelector ? 'w-1/4' : 'w-full'} transition-all duration-300 ease-in-out`}>
                <Header  />
                <div className="pt-[50px]">
                    <Dashboard />
                </div>
            </div>
        </div>
    );
};

export default Body;
