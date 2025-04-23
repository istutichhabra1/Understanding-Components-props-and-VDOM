import React from 'react';

function Card({ title, children }) {
  return (
    <div style={styles.card}>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    margin: '10px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
};

export default Card;
