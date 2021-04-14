import React, { useState } from "react";

function App() {
  const [fullName, updateName] = useState({
    fname: "",
    lName: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    updateName((previousValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: previousValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: previousValue.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}{" "}
      </h1>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          // value={fullName.fname}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          //value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
