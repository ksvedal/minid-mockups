import { faTree } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';



const Forest = () => {

  return (
    <div className={"-bottom-1 -right-4 absolute"}>
        <FontAwesomeIcon icon={faTree} className=' absolute bottom-0 right-16 text-custom-purple text-[7rem]'/>
        <FontAwesomeIcon icon={faTree} className=' absolute right-36 text-custom-light-purple text-[5rem]'/>
        <FontAwesomeIcon icon={faTree} className=' absolute bottom-0 right-52 text-custom-purple text-[7rem]'/>
        <FontAwesomeIcon icon={faTree} className=' text-custom-light-purple text-[5rem]'/>
    </div>
  )
};

export default Forest;