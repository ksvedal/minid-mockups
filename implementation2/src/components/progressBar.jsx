import React from 'react';

const ProgressBar = ({ totalTasks, completedTasks }) => {

  return (
      <div className={"absolute top-0 m-10 flex items-center justify-center space-x-0"}>
          {[...Array(totalTasks)].map((_, index) => {
            const isCompleted = index < completedTasks;
            const isFirstCompleted = index === 0;
            const showLine = !isFirstCompleted

            return (
              <React.Fragment key={index}>
                {showLine && (
                  <div className={`h-1.5 shadow-md w-6 ${isCompleted ? 'bg-custom-purple dark:bg-custom-light-red ' : 'bg-white '}`} />
                )}
                <div
                  className={`h-6 w-6 shadow-md rounded-full ${isCompleted ? 'bg-custom-purple dark:bg-custom-red' : 'bg-white'}`}
                />
              </React.Fragment>
            );
          })}
      </div>
  );
};

export default ProgressBar;
