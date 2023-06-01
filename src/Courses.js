import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [newCourses, setNewCourses] = useState({
    course_name: '',
    lecturer_id: '',
    credits: '',
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/courses');
      setCourses(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    setNewCourses({
      ...newCourses,
      [event.target.name]: event.target.value,
    });
  };

  const addCourses = async () => {
    try {
      await axios.post('http://localhost:5000/api/courses', newCourses);
      setNewCourses({
        course_name: '',
        lecturer_id: '',
        credits: '',
      });
      fetchCourses();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCourses = async (courseId) => {
    try {
      await axios.delete(`http://localhost:5000/api/courses/${courseId}`);
      fetchCourses();
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
      <h1 style={styles.heading}>Courses</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={styles.tableHeaderStyle}>Course ID</th>
            <th style={styles.tableHeaderStyle}>Course Name</th>
            <th style={styles.tableHeaderStyle}>Lecturer ID</th>
            <th style={styles.tableHeaderStyle}>Credits</th>
            <th style={styles.tableHeaderStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.course_id}>
              <td style={styles.tableDataStyle}>{course.course_id}</td>
              <td style={styles.tableDataStyle}>{course.course_name}</td>
              <td style={styles.tableDataStyle}>{course.lecturer_id}</td>
              <td style={styles.tableDataStyle}>{course.credits}</td>
              <td style={styles.tableDataStyle}>
                <button style={styles.deleteButtonStyle} onClick={() => deleteCourses(course.course_id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 style={styles.heading}>Add Courses</h2>
      <form>
        <input
          type="text"
          name="course_name"
          placeholder="Course Name"
          value={newCourses.course_name}
          onChange={handleInputChange}
          style={styles.inputStyle}
        />
        <input
          type="text"
          name="lecturer_id"
          placeholder="Lecturer ID"
          value={newCourses.lecturer_id}
          onChange={handleInputChange}
          style={styles.inputStyle}
        />
        <input
          type="text"
          name="credits"
          placeholder="Credits"
          value={newCourses.credits}
          onChange={handleInputChange}
          style={styles.inputStyle}
        />
        <button type="button" onClick={addCourses} style={styles.addButtonStyle}>
          Add Course
        </button>
      </form>
    </Container>
  );
};

export default Courses;
