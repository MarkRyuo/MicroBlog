import { useState } from "react";

//* (e) Stand for events

const Home = () => {

    const handleClick = () => {
        
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name}</p>
            <button type="button" onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default Home;