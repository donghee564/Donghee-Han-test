import React from "react";
import styles from "./issue.module.css";

const Issue = ({ item, handleShowDetail }) => {
  const handleClick = () => {
    handleShowDetail(item);
  };

  return (
    <li onClick={handleClick} className={styles.issue}>
      <div className={styles.leftBox}>
        <p className={styles.title}>
          <span>#{item.number}</span>
          <span>{item.title}</span>
        </p>
        <p className={styles.user}>
          작성자: {item.user.login} 작성일: {item.created_at}
        </p>
      </div>
      <div className={styles.num}>
        <p>코멘트: {item.comments}</p>
      </div>
    </li>
  );
};

export default Issue;
