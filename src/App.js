import "./App.css";
import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState();
  const [newsletter, setNewsletter] = useState(false);

  // Add states and eventHandlers here

  function handleFirstNameChange(event) {
    const { value } = event.target;
    setFirstName(value);
    console.log(value);
  }

  function handleLastNameChange(event) {
    const { value } = event.target;
    setLastName(value);
    console.log(value);
  }

  function handleAgeChange(event) {
    const { value } = event.target;
    setAge(value);
    console.log(value);
  }

  function handleEmailChange(event) {
    const { value } = event.target;
    setEmail(value);
    console.log(value);
  }

  function handleNewsletterClick(event) {
    const { value } = event.target;
    setNewsletter(value);
    console.log(value);
  }

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
        <input
          type="text"
          name="firstName"
          onChange={handleFirstNameChange}
          value={firstName}
        />
        <label htmlFor="lastName">Surname:</label>
        <input
          type="text"
          name="lastName"
          onChange={handleLastNameChange}
          value={lastName}
        />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          name="age"
          onChange={handleAgeChange}
          value={age}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          onChange={handleEmailChange}
          value={email}
        />
        <div className="newsletter">
          <input
            type="checkbox"
            name="newsletter"
            onClick={handleNewsletterClick}
            value={newsletter}
          />
          <label htmlFor="newsletter">
            Yes, I would like many more emails!
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
