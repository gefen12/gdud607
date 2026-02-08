import React from "react";
import "../styles/GenericScreen.css";

function GenericScreen({ itemsList }) {
  // Sort the items alphabetically by their label property (Hebrew locale)
  const sortedItems = [...itemsList].sort((a, b) => a.label.localeCompare(b.label, 'he'));

  return (
    <div className="GenericScreen">
      {sortedItems.map((item, index) => (
        // Each item is wrapped in an anchor tag with the specified link
        <a href={item.href} className="item3" key={index}>
          {/* If you are using a router like React Router, replace 'a href' with '<Link to={item.href}>' */}
          <span className="item2">{item.label}</span>
        </a>
      ))}
    </div>
  );
}

export default GenericScreen;