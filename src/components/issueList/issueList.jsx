import React from "react";
import Issue from "../issue/issue";
import styles from "./issueList.module.css";

const IssueList = ({ items, handleShowDetail }) => {
  return (
    <ul className={styles.issueList}>
      {items.map((item) => {
        return (
          <Issue
            key={item.id}
            item={item}
            handleShowDetail={handleShowDetail}
          />
        );
      })}
    </ul>
  );
};

export default IssueList;
