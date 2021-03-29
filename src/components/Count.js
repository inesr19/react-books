import React, {useState, useEffect} from "react";
import "../styles/Count.css";

function Count() { 
    const [counter, setCounter] = useState(5);
      
    useEffect(() => {
        const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    
    return () => clearInterval(timer);
    
}, [counter]);

if(counter === 0) {
    return (
    <div>
    <h1 className="hello">Hello World</h1>
    <p className="align">Click the button below to learn more.
    <hr />
    <button>Click me!</button>
    </p>
    </div>
    )
}

return (
    <div>
        <div className="countdown">{counter}</div>
    </div>
        );
}

export default Count;