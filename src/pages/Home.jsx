

const Home = () => {

    const handleClick = () => {
        console.log("Hello, Terminal")
    }

    const handleClickAgain = (name) => { 
        console.log("Hello " + name) ;


    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button type="button" onClick={handleClick}>Click Me</button>
            <button type="button" onClick={() => {
                handleClickAgain("Jhon Mark")
            }}>Click me Again</button>
        </div>
    );
}

export default Home;