import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';

const App = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    student_name: '',
    date_of_birth: '',
    major: '',
  });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/students');
      setStudents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    setNewStudent({
      ...newStudent,
      [event.target.name]: event.target.value,
    });
  };

  const addStudent = async () => {
    try {
      await axios.post('http://localhost:5000/api/students', newStudent);
      setNewStudent({
        student_name: '',
        date_of_birth: '',
        major: '',
      });
      fetchStudents();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteStudent = async (studentId) => {
    try {
      await axios.delete(`http://localhost:5000/api/students/${studentId}`);
      fetchStudents();
    } catch (error) {
      console.log(error);
    }
  };

  const styles = {
    container: {
      backgroundColor: '#f2f2f2',
      padding: '30px',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    tableHeaderStyle: {
      backgroundColor: '#f2f2f2',
      color: '#333',
      padding: '8px',
      textAlign: 'left',
      borderBottom: '1px solid #ddd',
    },
    tableDataStyle: {
      padding: '8px',
      borderBottom: '1px solid #ddd',
    },
    deleteButtonStyle: {
      backgroundColor: '#f44336',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      padding: '8px',
      cursor: 'pointer',
    },
    inputStyle: {
      width: '100%',
      padding: '8px',
      marginBottom: '10px',
    },
    addButtonStyle: {
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      padding: '10px',
      cursor: 'pointer',
    },
  };

  return (
    <Container style={styles.container}>
      <h1 style={styles.heading}>Students</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={styles.tableHeaderStyle}>Student ID</th>
            <th style={styles.tableHeaderStyle}>Student Name</th>
            <th style={styles.tableHeaderStyle}>Date of Birth</th>
            <th style={styles.tableHeaderStyle}>Major</th>
            <th style={styles.tableHeaderStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.student_id}>
              <td style={styles.tableDataStyle}>{student.student_id}</td>
              <td style={styles.tableDataStyle}>{student.student_name}</td>
              <td style={styles.tableDataStyle}>{student.date_of_birth}</td>
              <td style={styles.tableDataStyle}>{student.major}</td>
              <td style={styles.tableDataStyle}>
                <button
                  style={styles.deleteButtonStyle}
                  onClick={() => deleteStudent(student.student_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 style={styles.heading}>Add Student</h2>
      <form>
        <input
          type="text"
          name="student_name"
          placeholder="Student Name"
          value={newStudent.student_name}
          onChange={handleInputChange}
          style={styles.inputStyle}
        />
        <input
          type="text"
          name="date_of_birth"
          placeholder="Date of Birth"
          value={newStudent.date_of_birth}
          onChange={handleInputChange}
          style={styles.inputStyle}
        />
        <input
          type="text"
          name="major"
          placeholder="Major"
          value={newStudent.major}
          onChange={handleInputChange}
          style={styles.inputStyle}
        />
        <button type="button" onClick={addStudent} style={styles.addButtonStyle}>
          Add Student
        </button>
      </form>
    </Container>
  );
};

export default App;
