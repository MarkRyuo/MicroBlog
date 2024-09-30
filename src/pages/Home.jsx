

//* (e) Stand for events

const Home = () => {

    const handleClick = (e) => {
    }

    const handleClickAgain = (name, e) => { 
        console.log("Hello " + name, e.target) ;


    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button type="button" onClick={handleClick}>Click Me</button>
            <button type="button" onClick={(e) => handleClickAgain("Jhon Mark", e)}>Click me Again</button>
        </div>
    );
}

export default Home;