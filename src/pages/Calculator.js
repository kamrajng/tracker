import React from "react";




const Calculator = () => {
            
  const createDigits = () => {
      const digits = [];

      for (let i = 1; i < 10; i++ ) {
        digits.push(
          <button key={i}>{i}</button>            
        )
     }
             
  return digits
  }




  return (
    <div className='general'>
      <h2> Calculator </h2>
      <div className="calculator">
        <div className="display">
          <span>(0)</span> 0
        </div>
        <div className='operators'>
          <button>/</button>
          <button>*</button>
          <button>+</button>
          <button>-</button>
        
          <button>DEL</button>  
        </div>

        <div className='digits'> 
        { createDigits() }
        <button>0</button>
        <button>.</button>
        <button>=</button>

        </div>

      </div>
    </div>
  );
};

export default Calculator;
