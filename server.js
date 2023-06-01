const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 5000;

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'aliiqbal786',
  database: 'record',
});

// Connect to the MySQL database
connection.connect((error) => {
  if (error) {
    console.log('Error connecting to the database: ', error);
  } else {
    console.log('Connected to the database');
  }
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Get all lecturers
app.get('/api/lecturer', (req, res) => {
  const query = 'SELECT * FROM Lecturers';
  connection.query(query, (error, results) => {
    if (error) {
      console.log('Error retrieving lecturers: ', error);
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

// Add a new lecturer
app.post('/api/lecturer', (req, res) => {
  const { lecturer_name, date_of_birth, department } = req.body;
  const query = 'INSERT INTO Lecturers (lecturer_name, date_of_birth, department) VALUES (?, ?, ?)';
  connection.query(query, [lecturer_name, date_of_birth, department], (error, results) => {
    if (error) {
      console.log('Error adding lecturer: ', error);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
});

// Delete a lecturer
// Delete a lecturer
app.delete('/api/lecturer/:id', (req, res) => {
  const lecturerId = req.params.id;
  const query = 'DELETE FROM Lecturers WHERE lecturer_id = ?'; // Corrected table name
  connection.query(query, [lecturerId], (error, results) => {
    if (error) {
      console.log('Error deleting lecturer: ', error);
      res.sendStatus(500);
    } else if (results.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  });
});


// Get all courses
app.get('/api/courses', (req, res) => {
  const query = 'SELECT * FROM Courses';
  connection.query(query, (error, results) => {
    if (error) {
      console.log('Error retrieving Courses: ', error);
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

// Add a new Course
app.post('/api/courses', (req, res) => {
  const { course_name, lecturer_id, credits } = req.body;
  const query = 'INSERT INTO Courses (course_name, lecturer_id, credits) VALUES (?, ?, ?)';
  connection.query(query, [course_name, lecturer_id, credits], (error, results) => {
    if (error) {
      console.log('Error adding course: ', error);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
});


// Delete a course
app.delete('/api/courses/:id', (req, res) => {
  const courseId = req.params.id;
  const query = 'DELETE FROM courses WHERE course_id = ?';
  connection.query(query, [courseId], (error, results) => {
    if (error) {
      console.log('Error deleting course: ', error);
      res.sendStatus(500);
    } else if (results.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  });
});
// Get all students
app.get('/api/students', (req, res) => {
  const query = 'SELECT * FROM Students';
  connection.query(query, (error, results) => {
    if (error) {
      console.log('Error retrieving students: ', error);
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

// Add a new student
app.post('/api/students', (req, res) => {
  const { student_name, date_of_birth, major } = req.body;
  const query = 'INSERT INTO Students (student_name, date_of_birth, major) VALUES (?, ?, ?)';
  connection.query(query, [student_name, date_of_birth, major], (error, results) => {
    if (error) {
      console.log('Error adding student: ', error);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
});

// Delete a student
app.delete('/api/students/:id', (req, res) => {
  const studentId = req.params.id;
  const query = 'DELETE FROM Students WHERE student_id = ?';
  connection.query(query, [studentId], (error, results) => {
    if (error) {
      console.log('Error deleting student: ', error);
      res.sendStatus(500);
    } else if (results.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  });
});
// Update a course
app.put('/api/courses/:id', (req, res) => {
  const courseId = req.params.id;
  const { course_name, lecturer_id, credits } = req.body;
  const query = 'UPDATE Courses SET course_name = ?, lecturer_id = ?, credits = ? WHERE course_id = ?';
  connection.query(query, [course_name, lecturer_id, credits, courseId], (error, results) => {
    if (error) {
      console.log('Error updating course: ', error);
      res.sendStatus(500);
    } else if (results.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
    }
  });
});
// Update a course
app.put('/api/students/:id', (req, res) => {
  const studentId = req.params.id;
  const { student_name,date_of_birth,major } = req.body;
  const query = 'UPDATE Students SET student_name = ?, date_of_birth = ?, major = ? WHERE student_id = ?';
  connection.query(query, [student_name,date_of_birth,major,studentId], (error, results) => {
    if (error) {
      console.log('Error updating student: ', error);
      res.sendStatus(500);
    } else if (results.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
    }
  });
});
// Update a course
app.put('/api/lecturer/:id', (req, res) => {
  const lecturerId = req.params.id;
  const { lecturer_name,date_of_birth,department } = req.body;
  const query = 'UPDATE Lecturers SET lecturer_name = ?, date_of_birth = ?, department = ? WHERE lecturer_id = ?';
  connection.query(query, [lecturer_name,date_of_birth,department,lecturerId], (error, results) => {
    if (error) {
      console.log('Error updating lecturer data: ', error);
      res.sendStatus(500);
    } else if (results.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
    }
  });
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

