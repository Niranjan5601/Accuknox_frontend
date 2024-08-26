import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeToggleSidebar } from "../utils/toggleSideBarSlice";
import { updateWidgets } from "../utils/dashBoardDataSlice"; 
import AddRemoveWidget from './AddRemoveWidget';

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState('CSPM');
    const selector = useSelector((store) => store.dashBoardData);
    const dispatch = useDispatch();

    // Local state to track widget visibility for the active tab
    const [widgetStates, setWidgetStates] = useState({});

    useEffect(() => {
        // Update the widgetStates whenever the active tab changes
        const initialStates = {};
        const filteredData = selector.find(value => value.type === activeTab);

        if (filteredData) {
            filteredData.data.forEach(widget => {
                initialStates[widget.title] = widget.isShown;
            });
        }
        setWidgetStates(initialStates);
    }, [activeTab, selector]);

    const handleCheckboxChange = (title, isChecked) => {
        setWidgetStates(prevState => ({
            ...prevState,
            [title]: isChecked, 
        }));
    };

    const handleConfirm = () => {
        const updatedData = selector.map(category => {
            if (category.type === activeTab) {
                return {
                    ...category,
                    data: category.data.map(widget => ({
                        ...widget,
                        isShown: widgetStates[widget.title] !== undefined ? widgetStates[widget.title] : widget.isShown
                    }))
                };
            } else {
                return category; 
            }
        });

        // Dispatch the updated data to the Redux store
        dispatch(updateWidgets(updatedData));
    };

    return (
        <div className="w-full bg-white h-screen fixed right-0 top-0 flex flex-col">
            <div className="bg-[#0F1941] text-white text-sm h-10 p-2 flex justify-between">
                Add Widget
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6 cursor-pointer ml-2"
                        onClick={() => dispatch(changeToggleSidebar())}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
            <div className="h-8 pt-3 text-sm pl-2">
                Personalize your dashboard by adding the following widget
            </div>
            <div className="flex justify-between items-center border-b px-4 py-2">
                <div className="flex flex-1">
                    {['CSPM', 'CWPP', 'IMAGE', 'TICKET'].map(tab => (
                        <button
                            key={tab}
                            className={`py-2 flex-1 text-[#0F1941] text-sm font-bold ${activeTab === tab ? 'border-b-2 border-[#0F1941]' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex-1 p-5 overflow-y-auto">
                {selector && selector.length > 0 ? (
                    selector.find(category => category.type === activeTab)?.data.map(widget => (
                        <AddRemoveWidget
                            key={widget.title}
                            title={widget.title}
                            isShown={widgetStates[widget.title] !== undefined ? widgetStates[widget.title] : widget.isShown}
                            onCheckboxChange={handleCheckboxChange}
                        />
                    ))
                ) : (
                    "No Data"
                )}
            </div>
            <div className="border-t p-5 flex justify-end gap-3">
                <button className="px-4 py-2 bg-[#fff] border-[1px] border-[#3F4769] text-[#3F4769] rounded-lg text-sm" onClick={() => dispatch(changeToggleSidebar())}>
                    Cancel
                </button>
                <button className="px-4 py-2 bg-[#0F1941] text-white rounded-lg text-sm" onClick={handleConfirm}>
                    Confirm
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
