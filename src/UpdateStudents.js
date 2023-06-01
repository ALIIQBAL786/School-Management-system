import React, { useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';

const UpdateStudent = () => {
  const [studentId, setStudentId] = useState('');
  const [student_name, setStudentName] = useState('');
  const [date_of_birth, setDOB] = useState('');
  const [major, setMajor] = useState('');

  const handleUpdate = () => {
    const updatedStudent = {
      student_name: student_name,
      date_of_birth: date_of_birth,
      major: major,
    };

    // Send update request
    axios
      .put(`http://localhost:5000/api/students/${studentId}`, updatedStudent)
      .then(() => {
        console.log('Student updated successfully');
        // Handle success, e.g., show a success message or redirect
      })
      .catch((error) => {
        console.error('Error updating student:', error);
        // Handle error, e.g., show an error message
      });
  };

  const styles = {
    container: {
      backgroundColor: '#f2f2f2',
      padding: '30px',
      marginTop: '20px',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    inputLabelStyle: {
      marginBottom: '5px',
    },
    inputStyle: {
      width: '100%',
      padding: '8px',
      marginBottom: '10px',
    },
    updateButtonStyle: {
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
      <h2 style={styles.heading}>Update Student</h2>
      <label style={styles.inputLabelStyle}>Student ID:</label>
      <input
        type="text"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
        style={styles.inputStyle}
      />

      <label style={styles.inputLabelStyle}>Student Name:</label>
      <input
        type="text"
        value={student_name}
        onChange={(e) => setStudentName(e.target.value)}
        style={styles.inputStyle}
      />

      <label style={styles.inputLabelStyle}>DOB:</label>
      <input
        type="text"
        value={date_of_birth}
        onChange={(e) => setDOB(e.target.value)}
        style={styles.inputStyle}
      />

      <label style={styles.inputLabelStyle}>Major:</label>
      <input
        type="text"
        value={major}
        onChange={(e) => setMajor(e.target.value)}
        style={styles.inputStyle}
      />

      <button onClick={handleUpdate} style={styles.updateButtonStyle}>
        Update Student
      </button>
    </Container>
  );
};

export default UpdateStudent;