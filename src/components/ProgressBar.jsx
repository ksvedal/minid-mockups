import React from 'react';

const ProgressBar = ({ totalTasks, completedTasks }) => {
  const remainingTasks = totalTasks - completedTasks;

  return (
    <div className="flex items-center justify-center space-x-0">
      {[...Array(totalTasks)].map((_, index) => {
        const isCompleted = index < completedTasks;
        const isFirstCompleted = index === 0;
        const showLine = !isFirstCompleted 

        return (
          <React.Fragment key={index}>
            {showLine && (
              <div className={`h-1.5 w-6 ${isCompleted ? 'bg-blue-500' : 'bg-gray-300'}`} />
            )}
            <div
              className={`h-6 w-6 rounded-full ${isCompleted ? 'bg-blue-500' : 'bg-gray-300'}`}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ProgressBar;
