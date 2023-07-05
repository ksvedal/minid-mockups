import React from 'react';



const Mountains = ({ bigMountainColor, smallMountainColor }) => {

  return (
    <div>
      <div
        className={`absolute w-32 text-center h-28 bg-${bigMountainColor} right-0 transform rotate-45 z-10`}
        ></div>
      <div
        className={`absolute w-20 text-center h-24 bg-${smallMountainColor} right-28 transform rotate-45`}
      ></div>
    </div>
  );
};

export default Mountains;
