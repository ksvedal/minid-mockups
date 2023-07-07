import { faTree } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';



const Forest = () => {

  return (
    <div>
        <FontAwesomeIcon icon={faTree} className=' bg-custom-purple text-3xl'/>
        <FontAwesomeIcon icon={faTree} className=' bg-custom-light-purple text-3xl'/>
        <FontAwesomeIcon icon={faTree} className=' bg-custom-purple text-3xl'/>
        <FontAwesomeIcon icon={faTree} className=' bg-custom-light-purple text-3xl'/>
    </div>
  );
};

export default Forest;