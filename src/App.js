import "./App.css";

function App() {
  // Add states and eventHandlers here

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted");
  }

  return (
    <div className="App">
      <h1>More USERS!</h1>
      <h2>Enter user credentials below:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">Name:</label>
        <input type="text" name="firstName" />
        <label htmlFor="lastName">Surname:</label>
        <input type="text" name="lastName" />
        <label htmlFor="age">Age:</label>
        <input type="number" name="age" />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" />
        <div className="newsletter">
          <input type="checkbox" name="newsletter" />
          <label htmlFor="newsletter">
            Yes, I would like many more emails!
          </label>
        </div>
      </form>
    </div>
  );
}

export default App;
