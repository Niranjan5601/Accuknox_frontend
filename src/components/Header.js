import Path from "./Path";
import SearchBar from "./SearchBar";
import useDashBoardData from "../hooks/useDashBoardData";

const Header = () => {
    useDashBoardData();
    return (
        <div className="fixed top-0 w-full flex items-center h-[40px] pl-[20px] bg-[#fff] ">
           <div>
           <Path />
           </div>
            <div className="flex-grow flex justify-end pr-[20px]">
                <SearchBar />
            </div>
            <div className="mr-[20px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#B0C3D1]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                </svg>

            </div>
        </div>
    )
}

export default Header;