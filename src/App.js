import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />

        <Form />
      </div>

      <Footer />
    </div>
  );
}

export default App;
