import React, { useState } from "react";
import axios from "axios"; // For sending the data to the backend
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

export default function Form() {
  const [selectedOption, setSelectedOption] = useState(""); // Tracks selected name
  const [preference, setPreference] = useState(""); // Tracks preference

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: selectedOption,
      preference: preference,
    };

    axios
      .post("http://localhost:5001/save", data)
      .then(() => {
        toast.success("Your preference has been saved!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setPreference("");
        setSelectedOption("");
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
  };

  return (
    <div>
      <form>
        <select id="name" className="search-input" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
          <option value="">Select your name</option>
          <option value="Nigel Jones">Nigel Jones</option>
          <option value="Morgan Ruffell">Morgan Ruffell</option>
          <option value="Harvey Plant">Harvey Plant</option>
          <option value="Gideon Smith">Gideon Smith</option>
          <option value="Tyler Smith">Tyler Smith</option>
          <option value="Jo MacDonald">Jo MacDonald</option>
          <option value="Gervais Boadi-Appiah">Gervais Boadi-Appiah</option>
          <option value="Addison Cort">Addison Cort</option>
          <option value="Jakub Bala">Jakub Bala</option>
          <option value="Aaron Kanani">Aaron Kanani</option>
          <option value="Jaskaran Singh">Jaskaran Singh</option>
        </select>

        <input
          id="preference"
          className="search-input"
          type="text"
          placeholder="Enter your preference"
          value={preference}
          onChange={(e) => setPreference(e.target.value)}
        ></input>

        <button onClick={handleSubmit} type="submit" className="submit-btn">
          Submit
        </button>
      </form>

      <ToastContainer />
    </div>
  );
}
