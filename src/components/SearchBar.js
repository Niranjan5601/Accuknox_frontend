import React from 'react'

function SearchBar() {
    return (
        <div className="p-2 ">
            <form>
                <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400">
                        <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clipRule="evenodd" />
                    </svg>
                    <input
                        type="text"
                        name="query"
                        placeholder="Search anything..."
                        title="Search anything..."
                        className="w-96 pl-8 pr-4 py-1 text-sm text-gray-600 bg-[#F0F5FA] border-2   border-[#E1EEFF]  rounded-md focus:outline-none"
                    />
                </div>
            </form>
        </div>
    );
}

export default SearchBar


