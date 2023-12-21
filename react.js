function Header() {
    return <h1>Develop. Preview. Ship.</h1>
}

function handleClick() {
    console.log("increment like count")
}

function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    return (
        <div>
            <Header title="Develop. Preview. Ship." />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <button onClick={handleClick}>Like</button>
        </div>
    );
}

ReactDOM.render(<HomePage />, app);