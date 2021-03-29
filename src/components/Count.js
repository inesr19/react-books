import React, {useState, useEffect} from "react";
import { Link, Route } from "react-router-dom";
import "../styles/Count.css";
import About from "./About";

function Count(props) { 
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
    <Link to="/about" role="button" className="btn btn-link">Click me!</Link>
    <Route exact path={`${props.match.url}/about`} component={About} />
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