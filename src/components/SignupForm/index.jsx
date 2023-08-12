import { useState } from "react";

const SignUpForm = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [adress, setAdress] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [phone, setPhone] = useState("");

  const handleClearClick = (e) => {
    e.preventDefault();
    setName("");
    setAge("");
    setAdress("");
    setZipcode("");
    setPhone("");
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log("Form was submitted");
    console.log(name, age, adress, zipcode, phone);
  };  


    return (
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="">
          Name
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            required
          />
        </label>
        <label htmlFor="">
          Age
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            type="number"
            required
          />
        </label>
        <label htmlFor="">
          Adress
          <input
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
            type="text"
            required
          />
        </label>
        <label htmlFor="">
          Zipcode
          <input
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            type="text"
            required
          />
        </label>
        <label htmlFor="">
          Phone
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="phone"
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
        <button onClick={handleClearClick}>Clear</button>
      </form>
    );
}

export default SignUpForm;