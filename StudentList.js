import React from 'react';

const StudentList = ({ students, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Students List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Enroll Number</th>
            <th>Date of Admission</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students && students.map(student => ( 
            <tr key={student._id}>
              <td>{student.Name}</td>
              <td>{student.Email}</td>
              <td>{student.Phone}</td>
              <td>{student.Enrollnumber}</td>
              <td>{student.DateOfAdmission}</td>
              <td>
                <button style={{backgroundColor:"green"}} onClick={() => onEdit(student)}>Edit</button>
                <button style={{backgroundColor:'red'}} onClick={() => onDelete(student._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
