import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';

const App = () => {
  const [lecturers, setLecturers] = useState([]);
  const [newLecturer, setNewLecturer] = useState({
    lecturer_name: '',
    date_of_birth: '',
    department: '',
  });

  useEffect(() => {
    fetchLecturers();
  }, []);

  const fetchLecturers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/lecturer');
      setLecturers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    setNewLecturer({
      ...newLecturer,
      [event.target.name]: event.target.value,
    });
  };

  const addLecturer = async () => {
    try {
      await axios.post('http://localhost:5000/api/lecturer', newLecturer);
      setNewLecturer({
        lecturer_name: '',
        date_of_birth: '',
        department: '',
      });
      fetchLecturers();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteLecturer = async (lecturerId) => {
    try {
      await axios.delete(`http://localhost:5000/api/lecturer/${lecturerId}`);
      fetchLecturers();
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
      <h1 style={styles.heading}>Lecturers</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={styles.tableHeaderStyle}>Lecturer ID</th>
            <th style={styles.tableHeaderStyle}>Lecturer Name</th>
            <th style={styles.tableHeaderStyle}>Date of Birth</th>
            <th style={styles.tableHeaderStyle}>Department</th>
            <th style={styles.tableHeaderStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {lecturers.map((lecturer) => (
            <tr key={lecturer.lecturer_id}>
              <td style={styles.tableDataStyle}>{lecturer.lecturer_id}</td>
              <td style={styles.tableDataStyle}>{lecturer.lecturer_name}</td>
              <td style={styles.tableDataStyle}>{lecturer.date_of_birth}</td>
              <td style={styles.tableDataStyle}>{lecturer.department}</td>
              <td style={styles.tableDataStyle}>
                <button style={styles.deleteButtonStyle} onClick={() => deleteLecturer(lecturer.lecturer_id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 style={styles.heading}>Add Lecturers</h2>
      <form>
        <input
          type="text"
          name="lecturer_name"
          placeholder="Lecturer Name"
          value={newLecturer.lecturer_name}
          onChange={handleInputChange}
          style={styles.inputStyle}
        />
        <input
          type="text"
          name="date_of_birth"
          placeholder="Date of Birth"
          value={newLecturer.date_of_birth}
          onChange={handleInputChange}
          style={styles.inputStyle}
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={newLecturer.department}
          onChange={handleInputChange}
          style={styles.inputStyle}
        />
        <button type="button" onClick={addLecturer} style={styles.addButtonStyle}>
          Add Lecturer
        </button>
      </form>
      
    </Container>
  );
};

export default App;
