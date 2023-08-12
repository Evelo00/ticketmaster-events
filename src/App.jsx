import { useState } from "react";

import Navbar from "./components/NavBar";
import Events from "./components/Events";
import SignUpForm from "./components/SignupForm";
import "./App.css";


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleNavbarSearch = (term) => {
    setSearchTerm(term);
  };

  console.log(searchTerm);


  return (
    <div className="App">
      <Navbar onSearch={handleNavbarSearch} />
      <Events searchTerm={searchTerm} />
      <SignUpForm />
    </div>
  );
}

export default App;
