import React from 'react'

function Path() {
    return (
      <div className="text-[#B4B9BE] flex items-center text-sm">
        <span className="cursor-pointer">Home</span>
        <span className="mx-2 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <span className="text-[#0F375F] cursor-pointer font-semibold">
          Dashboard V2
        </span>
      </div>
    );
  }

export default Path



