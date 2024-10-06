/* eslint-disable no-unused-vars */
import { useState } from "react";
import BlogList from "../components/BlogList";


const Home = () => {

    //* obj inside on array - Destructure the object
    //* id must be unique 
    const [blogs, setblogs] = useState([
        { title: "Beyond to the Infinite", body: "Lorem ipsum dolor sit amet, consectetur",  author: "Moda", id: 1 },
        { title: "Beyond to the Infinite: Start", body: "Lorem ipsum dolor sit amet, consectetur", author: "Ryuoda", id: 2 },
        { title: "Beyond to the Infinite: End ", body: "Lorem ipsum dolor sit amet, consectetur", author: "Niyari", id: 3 },
    ])

    const handleDelete = (id) => {
        const newBlog = blogs.filter(blog => blogs.id !== id)
        setblogs(newBlog)
    }

    return (
        <div className="home">
            <BlogList blogs={blogs} title={"All Blogs"} handleDelete={handleDelete()}/>  {/* Child - blogs={blogs} Passing in the child */}

        </div>
    );
}

export default Home;