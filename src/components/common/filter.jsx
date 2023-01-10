import React from "react";

const Filter = (props) => {
  const {
    items,
    itemsName,
    textProperty,
    valueProperty,
    onSelectFilter,
    selectedFilter,
  } = props;

  return (
    <ul className="list-group">
      <li
        className="list-group-item list-group-item-action"
        onClick={() => onSelectFilter(itemsName)}
        style={{ background: "#323539", color: "white", cursor: "pointer" }}
      >
        {itemsName}
      </li>

      {items.map((item) => (
        <li
          key={item[valueProperty]}
          onClick={() => onSelectFilter(item)}
          className={
            (item === selectedFilter)
              ? "list-group-item list-group-item-action active"
              : "list-group-item list-group-item-action"
          }
          style={{ cursor: "pointer" }}
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
