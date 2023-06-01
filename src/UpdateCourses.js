import React, { useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';

const UpdateCourse = () => {
  const [courseId, setCourseId] = useState('');
  const [courseName, setCourseName] = useState('');
  const [lecturerId, setLecturerId] = useState('');
  const [credits, setCredits] = useState('');

  const handleUpdate = () => {
    const updatedCourse = {
      course_name: courseName,
      lecturer_id: lecturerId,
      credits: credits,
    };

    // Send update request
    axios
      .put(`http://localhost:5000/api/courses/${courseId}`, updatedCourse)
      .then(() => {
        console.log('Course updated successfully');
        // Handle success, e.g., show a success message or redirect
      })
      .catch((error) => {
        console.error('Error updating course:', error);
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
      <h2 style={styles.heading}>Update Course</h2>
      <label style={styles.inputLabelStyle}>Course ID:</label>
      <input
        type="text"
        value={courseId}
        onChange={(e) => setCourseId(e.target.value)}
        style={styles.inputStyle}
      />

      <label style={styles.inputLabelStyle}>Course Name:</label>
      <input
        type="text"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
        style={styles.inputStyle}
      />

      <label style={styles.inputLabelStyle}>Lecturer ID:</label>
      <input
        type="text"
        value={lecturerId}
        onChange={(e) => setLecturerId(e.target.value)}
        style={styles.inputStyle}
      />

      <label style={styles.inputLabelStyle}>Credits:</label>
      <input
        type="text"
        value={credits}
        onChange={(e) => setCredits(e.target.value)}
        style={styles.inputStyle}
      />

      <button onClick={handleUpdate} style={styles.updateButtonStyle}>
        Update Course
      </button>
    </Container>
  );
};

export default UpdateCourse;