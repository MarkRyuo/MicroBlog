

const Home = () => {

    const handleClick = (e) => {
        console.log("Hello, Terminal" + e)
    }

    const handleClickAgain = (name, e) => { 
        console.log("Hello " + name, e.target) ;


    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button type="button" onClick={handleClick}>Click Me</button>
            <button type="button" onClick={() => handleClickAgain("Jhon Mark")}>Click me Again</button>
        </div>
    );
}

export default Home;