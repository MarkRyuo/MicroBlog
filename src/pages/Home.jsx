import { useState } from "react";

//* (e) Stand for events

const Home = () => {
    
    const [name, setname] = useState("Moda") //* Array destructure, this is reactive 

    // let name = "Moda" ;

    const handleClick = () => {
        setname("Ryuoda")
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