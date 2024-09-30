import { useState } from "react";


const Home = () => {

    //* obj inside on array - Destructure the object
    //* id must be unique 
    const [blogs, setblogs] = useState([
        { title: "Beyond to the Infinite", body: "Lorem ipsum dolor sit amet, consectetur",  author: "Moda", id:"b1"},
        { title: "Beyond to the Infinite: Start", body: "Lorem ipsum dolor sit amet, consectetur", author: "Ryuoda", id: "b2" },
        { title: "Beyond to the Infinite: End ", body: "Lorem ipsum dolor sit amet, consectetur", author: "Niyari", id: "b3" },
    ])

    const handleClick = () => {
        
    }

    return (
        <div className="home">
            <h2>Homepage</h2>

            <div>
                {blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>

                    </div>
                ))}
            </div>

        </div>
    );
}

export default Home;