import React from "react";
import styles from "./detail.module.css";

const Detail = ({ item, handleCloseDetail }) => {
  return (
    <div className={styles.detail}>
      <button className={styles.closeBtn} onClick={handleCloseDetail}>
        X
      </button>
      <div className={styles.titleWrap}>
        <img
          className={styles.avatar}
          src={item.user.avatar_url}
          alt="avatar"
        />
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
      </div>
      <div className={styles.ctnWrap}>
        <p>{item.body}</p>
      </div>
    </div>
  );
};

export default Detail;
