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
                  <div className={`h-1.5 w-6 ${isCompleted ? 'bg-custom-blue dark:bg-custom-yellow' : 'bg-custom-light-grey dark:bg-custom-very-darker-grey'}`} />
                )}
                <div
                  className={`h-6 w-6 rounded-full ${isCompleted ? 'bg-custom-blue dark:bg-custom-yellow' : 'bg-custom-light-grey dark:bg-custom-very-darker-grey'}`}
                />
              </React.Fragment>
            );
          })}
      </div>
  );
};

export default ProgressBar;
