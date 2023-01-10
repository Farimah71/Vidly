import React from "react";
import _ from "lodash";
import propTypes from "prop-types";

const Pagination = (props) => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);

  if (pagesCount > 1) {
    const pages = _.range(1, pagesCount + 1);
    return (
      <nav>
        <ul className="pagination">
          {pages.map((page) => (
            <li key={page} className="page-item" style={{ cursor: "pointer" }}>
              <a
                onClick={() => onPageChange(page)}
                className={
                  currentPage === page ? "page-link active" : "page-link"
                }
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
};

Pagination.propTypes = {
  itemsCount: propTypes.number.isRequired,
  pageSize: propTypes.number.isRequired,
  onPageChange: propTypes.func.isRequired,
  currentPage: propTypes.number.isRequired,
};

export default Pagination;
