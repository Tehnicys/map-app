import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.HeaderItem}>
        <div className={styles.ItemName}>Карты</div>
      </div>
    </div>
  );
};

export default Header;
