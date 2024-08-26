import { useDispatch } from "react-redux";

import { changeToggleSidebar } from "../utils/toggleSideBarSlice";

function DashboardHeader() {
    const dispatch = useDispatch();

    const enableToggle = () => {
        dispatch(changeToggleSidebar())
    }

    return (
        <div className="flex justify-between items-center p-6">
            <div>
                <h1 className="text-xl font-semibold">CNAPP Dashboard</h1>
            </div>
            <div className="flex items-center space-x-2">
                <button onClick={enableToggle} className="px-3 py-2 bg-white border border-gray-300 rounded-md text-sm hover:bg-gray-50 flex items-center justify-center space-x-1">
                    <span>Add Widget</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
                <button className="p-2 bg-white border border-gray-300  rounded-md hover:bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                </button>
                <button className="p-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>

                </button>
                <div className="flex items-center bg-white border border-[#14147D] rounded-md">
                    <div className="pl-1 pr-1 py-2  text-[#14147D] ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="text-[#14147D] text-2xl font-light leading-none h-8 flex items-center">
                        |
                    </div>
                    <div className="px-2 py-1 bg-white text-xs text-[#14147D] font-bold appearance-none focus:outline-none">
                        Last 2 days
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardHeader


