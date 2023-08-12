import { useState } from "react";

const Navbar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleinputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(search);
    }
  };

  return (
    <div className="navbar">
      <p>Mi boletera</p>
      <input
        value={search}
        placeholder="Busca tu evento favorito"
        onChange={handleinputChange}
        onKeyDown={handleInputKeyDown}
      />
    </div>
  );
};

export default Navbar;
