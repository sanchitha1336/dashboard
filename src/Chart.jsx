import React, { useState } from 'react';

function Chart() {
  // Define dynamic data for the bar chart
  const data = [
    { day: 'M', value: 4 },
    { day: 'T', value: 16 },
    { day: 'W', value: 24 },
    { day: 'T', value: 32 },
    { day: 'F', value: 20 },
    { day: 'S', value: 10 },
    { day: 'S', value: 10 },
  ];

  // State to manage dynamic data
  const [chartData, setChartData] = useState(data);

  // Function to update the data dynamically
  const updateData = () => {
    // For demonstration, let's update the data with random values
    const updatedData = chartData.map((item) => ({
      ...item,
      value: Math.floor(Math.random() * 30) + 1,
    }));
    setChartData(updatedData);
  };

  return (
    <div className="flex-grow bg-white rounded-xl shadow-md px-6 py-4 flex flex-col items-end">
      <div className="text-xs font-semibold tracking-wide uppercase py-1 px-3 rounded-full" style={{ backgroundColor: "rgb(123, 255, 253)", color: "rgb(0, 119, 117)" }}>New</div>
      <div className="grid grid-cols-7 gap-1 flex-grow self-stretch">
        {chartData.map((item, index) => (
          <div key={index} className="flex flex-col justify-end items-center">
            <div className="w-4 h-auto mx-auto rounded-full" style={{ backgroundColor: "rgb(123, 255, 253)", color: "rgb(0, 119, 117)", height: `${item.value * 4}px` }}></div>
            <div className="text-center text-xs text-gray-400 font-semibold mt-2">{item.day}</div>
          </div>
        ))}
      </div>
      <button className='bg-purple-200 rounded-md p-2 shadow-sm text-white hover:bg-purple-500' onClick={updateData}>Update Data</button>
    </div>
  );
}

export default Chart;
