import React from 'react';
import Card from './Card'; 

function CardContainer() {
  return (
    <div style={styles.container}>
      <Card title="Card 1: About React">
        <p>React is a JavaScript library for building user interfaces. It lets you build UI components and manage their states efficiently.</p>
      </Card>
      <Card title="Card 2: Benefits of React">
        <ul>
          <li>Reusable Components</li>
          <li>Virtual DOM for performance optimization</li>
          <li>Unidirectional data flow</li>
        </ul>
      </Card>
      <Card title="Card 3: React Hooks">
        <p>React Hooks allow you to use state and lifecycle features without writing a class component. Common hooks are useState and useEffect.</p>
      </Card>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  },
};

export default CardContainer;
