import React, { useState, useEffect} from "react";

function Home() {
    const [firstName, setName] = useState({
        name: ""
    })
    
    const [favColor, setColor] = useState({
        color: ""
    })


    return (
        
    <div className="card">
      <div>
        Name: {firstName.name}
      </div>
      <div>
        Favorite color: {favColor.color}
      </div>
      <div>
        <button onClick={() => setName({ ...firstName, name: "harry" })} className="btn">
          Click for name
        </button>
        <button onClick={() => setColor({ ...favColor, color: "Red" })} className="btn">
          Click for favorite color
        </button>
      </div>
    </div>
  );
}

export default Home;