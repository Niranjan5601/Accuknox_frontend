import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";
import { centerTextPlugin } from '../utils/utils';

ChartJS.register(ArcElement, Tooltip, Legend);

const Card = ({ data }) => {

    const chartData = {
        labels: data?.labels?.map((label) => label.name),
        datasets: [
            {
                data: data?.labels?.map((label) => label.value),
                backgroundColor: data?.labels?.map((label) => label?.color),
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        cutout: "70%",
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => {
                        return `${tooltipItem.label}: ${tooltipItem.raw}`;
                    },
                },
            },
            centerText: true,
        },
    };

    return (
        <div className="bg-[#fff] rounded-[10px] mb-[15px] pt-[10px] pr-[15px] pb-[25px] pl-[15px] w-[450px]">
            <div
                className="flex justify-between items-center mb-[10px]"

            >
                <h5 className='font-semibold text-sm'>{data.title}</h5>
            </div>


            {data.labels.length ? <div className="flex justify-between items-center">
                <div className="max-w-[150px]">
                    <Doughnut
                        data={chartData}
                        options={options}
                        plugins={[centerTextPlugin]}
                    />
                </div>

                {/* Right Side: Labels */}
                <div className="flex-1 pl-10">
                    <ul>
                        {data?.labels?.map((label, index) => (
                            <li
                                key={index}
                                className="flex items-center mb-1"
                            >
                                <span
                                    className='rounded-[4px] inline-block w-[12px] h-[12px] mr-[8px]'
                                    style={{
                                        backgroundColor: chartData?.datasets[0]?.backgroundColor[index],
                                    }}
                                ></span>
                                <div className='text-xs font-semibold'>
                                {label.name} ({chartData?.datasets[0]?.data[index]})
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div> : (
                <div className="flex flex-col items-center justify-center h-[150px]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        className="w-7 h-7 mb-2 text-[#DADADA]"  // Adjust size and add bottom margin
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                        />
                    </svg>
                    <div className='text-xs '>No Graph data available</div>
                </div>
            )}
        </div>
    );
}

export default Card;
