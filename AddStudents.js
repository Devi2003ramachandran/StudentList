import React, { useState } from "react";

const AddStudent = ({ onAdd, onCancel }) => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Enrollnumber, setEnrollnumber] = useState("");
  const [DateOfAdmission, setDateOfAdmission] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ Name, Email, Phone, Enrollnumber, DateOfAdmission });
    onCancel();
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div
          className="card"
          style={{ backgroundColor: "whitesmoke", marginLeft: "100px" }}
        ><br></br>
          <input
            type="text"
            placeholder="Name"
            required
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone"
            required
            value={Phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enroll Number"
            required
            value={Enrollnumber}
            onChange={(e) => setEnrollnumber(e.target.value)}
          />
          <input
            type="date"
            placeholder="Date of Admission"
            required
            value={DateOfAdmission}
            onChange={(e) => setDateOfAdmission(e.target.value)}
          />
          <div style={{marginLeft:"100px"}}>
            <button
              style={{ backgroundColor: "green", width: "200px" }}
              type="submit"
            >
              Submit
            </button>
            <button
              style={{ backgroundColor: "red", width: "200px" }}
              type="button"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
