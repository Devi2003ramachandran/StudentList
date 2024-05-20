
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import EditStudent from "./EditStudent";
import StudentList from "./StudentList";
import AddStudent from "./AddStudents";

const App = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingStudent, setEditingStudent] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:8000/student/alldata");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const addStudent = async (student) => {
    try {
      await axios.post("http://localhost:8000/student/studentpost", student);
      fetchStudents();
      alert("Successfully Submited ");
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  const updateStudent = async (id, updatedStudent) => {
    try {
      await axios.put(`http://localhost:8000/student/${id}`, updatedStudent);
      setEditingStudent(null);
      fetchStudents();
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  const deleteStudent = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        await axios.delete(`http://localhost:8000/student/${id}`);
        fetchStudents();
      } catch (error) {
        console.error("Error deleting student:", error);
      }
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  let filteredStudents = [];
  if (students && students.length > 0) {
    filteredStudents = students.filter(
      (student) =>
        student.Name &&
        student.Name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <div className="App">
      <div className="one">
        <h1>Students List</h1>
        <input
          style={{
            width: "200px",
            marginLeft: "450px",
            marginBottom: "none",
            backgroundColor: "wheat",
          }}
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button
          style={{
            backgroundColor: "skyblue",
            width: "200px",
            marginLeft: "700px",
          }}
          onClick={() => setIsAdding(true)}
        >
          Add Student
        </button>
      </div>
      {isAdding && (
        <AddStudent onAdd={addStudent} onCancel={() => setIsAdding(false)} />
      )}
      {editingStudent && (
        <EditStudent student={editingStudent} onUpdate={updateStudent} />
      )}
      {filteredStudents.length > 0 && (
        <StudentList
          students={filteredStudents}
          onEdit={setEditingStudent}
          onDelete={deleteStudent}
        />
      )}
    </div>
  );
};

export default App;
