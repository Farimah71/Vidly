import React from "react";

const Filter = ({
  items,
  textProperty,
  valueProperty,
  onSelectFilter,
  selectedFilter,
}) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          onClick={() => onSelectFilter(item)}
          className={
            item === selectedFilter
              ? "list-group-item list-group-item-action active"
              : "list-group-item list-group-item-action"
          }
          style={{
            cursor: "pointer",
            backgroundColor:
              item[textProperty] === "All Genres" ? "#323539" : "",
            color: item[textProperty] === "All Genres" ? "white" : "",
          }}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

Filter.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default Filter;
