

const Home = () => {

    const handleClick = () => {
        console.log("Hello World")
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button type="button" onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default Home;