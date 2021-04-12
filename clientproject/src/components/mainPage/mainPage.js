import react from 'react';

const MainPage = () => {
    return (
        <div>
            <h1>MainPage</h1>
            <input></input>
            <button onClick={() => { console.log("Increment") }}>Increment</button>
            <button onClick={() => { console.log("Increment") }}>Decrement</button>
        </div>
    );
}
export default MainPage;