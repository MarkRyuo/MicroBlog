

const Home = () => {

    const handleClick = () => {
        console.log("Hello, Terminal")
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button type="button" onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default Home;