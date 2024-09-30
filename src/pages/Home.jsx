import { useState } from "react";

//* (e) Stand for events

const Home = () => {

    const [blog, setblogs] = useState([
        {title: "Beyond to the Infinite", author: "Moda", id:"b1"}
    ])

    const handleClick = () => {
        
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
        </div>
    );
}

export default Home;