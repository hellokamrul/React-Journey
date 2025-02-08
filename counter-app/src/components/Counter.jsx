import { useState } from "react"
import "../style.css"
const Counter = () => {
    const[count,setCount] = useState(0);

    const increment =()=>setCount(count+1);
    const decrement =()=>setCount(
        count>0 ? count-1 : 0 | alert("Count should not be Neg"),
    );
    const reset =()=>setCount(0);
  return (
    <div className="container">
        <div>
        <h1 className="number">{count}</h1>

        </div>
        <div className="btns-container">
            <button onClick={increment} className="icrement">+</button>
            <button onClick={decrement} className="decrement">-</button>
            <button onClick={reset} className="reset">Reset</button>
        </div>

    </div>
  )
}

export default Counter