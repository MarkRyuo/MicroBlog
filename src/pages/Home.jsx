

//* (e) Stand for events

const Home = () => {

    const handleClick = () => {
    }

    const handleClickAgain = (name, e) => { 
        console.log("Hello " + name, e.target) ;


    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button type="button" onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default Home;