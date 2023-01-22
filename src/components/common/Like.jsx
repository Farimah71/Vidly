import React from "react";

const Like = ({ liked, onLiked }) => {
  let classes = "fa fa-heart";
  if (!liked) {
    classes += "-o";
  }
  return (
    <i
      onClick={onLiked}
      className={classes}
      aria-hidden="true"
      style={{ cursor: "pointer" }}
    ></i>
  );
};

export default Like;
