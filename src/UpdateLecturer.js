import React, { useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';

const UpdateLecturer = () => {
  const [LecturerId, setLecturerId] = useState('');
  const [lecturer_name, setLecturerName] = useState('');
  const [date_of_birth, setDOB] = useState('');
  const [department, setDepartment] = useState('');

  const handleUpdate = () => {
    const UpdatedLecturer = {
      lecturer_name: lecturer_name,
      date_of_birth: date_of_birth,
      department: department,
    };

    // Send update request
    axios
      .put(`http://localhost:5000/api/lecturer/${LecturerId}`, UpdatedLecturer)
      .then(() => {
        console.log('Lecturer data updated successfully');
        // Handle success, e.g., show a success message or redirect
      })
      .catch((error) => {
        console.error('Error updating Lacturer data:', error);
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
      <h2 style={styles.heading}>Update Lecturer Data</h2>
      <label style={styles.inputLabelStyle}>Lecturer ID:</label>
      <input
        type="text"
        value={LecturerId}
        onChange={(e) => setLecturerId(e.target.value)}
        style={styles.inputStyle}
      />

      <label style={styles.inputLabelStyle}>Lecturer Name:</label>
      <input
        type="text"
        value={lecturer_name}
        onChange={(e) => setLecturerName(e.target.value)}
        style={styles.inputStyle}
      />

      <label style={styles.inputLabelStyle}>Date of birth:</label>
      <input
        type="text"
        value={date_of_birth}
        onChange={(e) => setDOB(e.target.value)}
        style={styles.inputStyle}
      />

      <label style={styles.inputLabelStyle}>Department:</label>
      <input
        type="text"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        style={styles.inputStyle}
      />

      <button onClick={handleUpdate} style={styles.updateButtonStyle}>
        Update Lecturer Data
      </button>
    </Container>
  );
};

export default UpdateLecturer;