import React from 'react';
import symbol1 from '../icon/symbol_1.svg';

function PartOne ()  {    
     
  return (
    <div className='partone'>

      <div className='you-are'>
        You are invited to        
      </div>

      <div className='thewedding'>
        THE WEDDING OF
      </div>

      <div >        
        <img src={symbol1} className='symbol-one' loading='lazy' alt="logo" />
      </div>
    </div>
  );
}

export default PartOne;
