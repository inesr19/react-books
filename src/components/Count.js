import React, {useState, useEffect} from "react";

function Count() { 
    const [counter, setCounter] = useState(10);
      
useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);

    return () => clearInterval(timer);
    
}, [counter]);

if(counter === 0) {
    return <h1 className="hello">Hello World</h1>
}

return (
    <div>
        <div className="countdown">Countdown: {counter}</div>
    </div>
        );
}

export default Count;