import { useState } from "react";


const Home = () => {

    const [blog, setblogs] = useState([
        { title: "Beyond to the Infinite", body: "Lorem ipsum dolor sit amet, consectetur",  author: "Moda", id:"b1"},
        { title: "Beyond to the Infinite: Start", body: "Lorem ipsum dolor sit amet, consectetur", author: "Ryuoda", id: "b2" },
        { title: "Beyond to the Infinite: End ", body: "Lorem ipsum dolor sit amet, consectetur", author: "Niyari", id: "b3" },
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