import React from 'react';
import ReactDOM from 'react-dom';

function ListComponent({ items }) {
  return (
    <div>
      <h2>Item List</h2>
      {items.length > 0 ? (
        items.map((item, index) => <p key={index}>{item}</p>)
      ) : (
        <p>No items available</p>
      )}
    </div>
  );
}

function App() {
  const items = ["Item 1", "Item 2", "Item 3"];
  return (
    <div>
      <h1>My App</h1>
      {}
      <ListComponent items={items} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
