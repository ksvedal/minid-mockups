import React from 'react';



const Mountains = ({ bigMountainColor, smallMountainColor, bigMountainHeight, smallMountainHeight,bigMountainWidth }) => {

  return (
    <div>
      <div
        className={`absolute w-32 text-center h-${bigMountainHeight} bg-${bigMountainColor} right-0 transform rotate-45 z-10`}
        ></div>
      <div
        className={`absolute w-20 text-center h-${smallMountainHeight} bg-${smallMountainColor} right-28 transform rotate-45`}
      ></div>
    </div>
  );
};

export default Mountains;
