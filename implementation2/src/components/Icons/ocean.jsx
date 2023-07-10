import { faWater } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';



const Ocean = () => {

  return (
      <div className={"-bottom-24 -right-24 -rotate-45 absolute"}>
        <FontAwesomeIcon icon={faWater} className=' text-custom-light-purple text-[16rem] dark:text-custom-light-red'/>
    </div>
  );
};

export default Ocean;