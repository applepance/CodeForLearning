import React, { useState } from "react";

function Count() {
  const [ count, setCount ] = useState(0);
  return (
    <div>
      count: { count }
      <button onClick={()=>{
        setCount(count + 1);
      }}>+</button>
    </div>
  )
}

export default Count;