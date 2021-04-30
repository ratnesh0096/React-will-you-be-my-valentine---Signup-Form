import React, { Component, useState } from "react";
import '../styles/App.css';
import SignUpForm from "./SignUpForm";

const App = () => {
  const [isSubmitted, setSubmisson] = useState(false);
  function submitForm() {
    setSubmisson(true);
  }
  return (
    <div id="main">
      <h1>Sign Up Form</h1>
      <SignUpForm />
      { isSubmitted && <h2>You form is submitted succesfully.</h2> }
    </div>
  )
}


export default App;
