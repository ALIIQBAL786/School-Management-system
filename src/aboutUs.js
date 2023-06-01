import React from 'react';
import { Container } from 'react-bootstrap';

const ABOUTUS = () => {
  const styles = {
    container: {
      backgroundColor: '#f2f2f2',
      padding: '30px',
      textAlign: 'center',
    },
    heading: {
      color: '#333',
      fontFamily: 'Georgia, serif',
      fontSize: '32px',
      marginBottom: '10px',
    },
    content: {
      fontSize: '16px',
      lineHeight: '1.5',
      color: '#666',
    },
  };

  return (
    <Container style={styles.container} className="aboutus">
      <h1 style={styles.heading}>ABOUT US</h1>
      <h2 style={styles.heading}>WHO WE ARE</h2>
      <p style={styles.content}>
        Welcome to our school, where learning comes alive and dreams take flight. With a vibrant community of dedicated educators and a nurturing environment, we strive to empower each student to reach their full potential and embrace a future filled with knowledge and endless possibilities.
      </p>
    </Container>
  );
};

export default ABOUTUS;
