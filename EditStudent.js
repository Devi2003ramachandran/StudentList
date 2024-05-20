import React, { useState } from 'react';

const EditStudent = ({ student, onUpdate }) => {
  // Null checks to prevent errors if student is undefined
  const [Name, setName] = useState(student?.Name || '');
  const [Email, setEmail] = useState(student?.Email || '');
  const [Phone, setPhone] = useState(student?.Phone || '');
  const [Enrollnumber, setEnrollnumber] = useState(student?.Enrollnumber || '');
  const [DateOfAdmission, setDateOfAdmission] = useState(student?.DateOfAdmission || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(student._id, { Name, Email, Phone, Enrollnumber,DateOfAdmission });
  };

  return (
    <div>
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          value={Phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enroll Number"
          value={Enrollnumber}
          onChange={(e) => setEnrollnumber(e.target.value)}
        />
        <input
          type="date"
          placeholder="Date of Admission"
          value={DateOfAdmission}
          onChange={(e) => setDateOfAdmission(e.target.value)}
        />
        <button type="submit">Update Student</button>
      </form>
    </div>
  );
};

export default EditStudent;
