import React from 'react';

const AddRemoveWidget = ({ title, isShown, onCheckboxChange }) => {

    const handleCheckboxChange = () => {
        onCheckboxChange(title, !isShown); // Toggle the checkbox state
    };

    return (
        <label className="flex items-center mb-4">
            <input 
                type="checkbox" 
                className="hidden peer" 
                checked={isShown} 
                onChange={handleCheckboxChange} 
            />
            <div className="mr-2 h-4 w-4 bg-gray-200 border border-gray-400 peer-checked:bg-[#0F1941] peer-checked:border-transparent rounded-sm flex items-center justify-center">
                {isShown && (
                    <svg className="w-4 h-4 text-white peer-checked:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                )}
            </div>
            {title}
        </label>
    );
}

export default AddRemoveWidget;
