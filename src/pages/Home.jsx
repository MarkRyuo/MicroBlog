/* eslint-disable no-unused-vars */
import { useState } from "react";


const Home = () => {

    //* obj inside on array - Destructure the object
    //* id must be unique 
    const [blogs, setblogs] = useState([
        { title: "Beyond to the Infinite", body: "Lorem ipsum dolor sit amet, consectetur",  author: "Moda", id: 1 },
        { title: "Beyond to the Infinite: Start", body: "Lorem ipsum dolor sit amet, consectetur", author: "Ryuoda", id: 2 },
        { title: "Beyond to the Infinite: End ", body: "Lorem ipsum dolor sit amet, consectetur", author: "Niyari", id: 3 },
    ])

    return (
        <div className="home">
            <h2>Homepage</h2>


        </div>
    );
}

export default Home;