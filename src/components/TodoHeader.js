import React from "react";

const TodoHeader = () => {


    // const names = ['James', 'John', 'Paul', 'Ringo', 'George'];


  return (
    <div>
      <div>
        <input type="type" value="search" />
      </div>
      <div>
      <input type="type" value={" "} />
        
        {/* {names
          .filter((name) => name.includes("J"))
          .map((filteredName) => (
            <li>{filteredName}</li>
          ))} */}
      </div>
      <div>
        <button><h1>+</h1></button>
      </div>
    </div>
  );
};

export default TodoHeader;
