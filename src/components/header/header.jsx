import React, { memo } from 'react';
import styles from './header.module.css';

const header = memo(({ URL }) => {
  return (
    <header className={styles.header}>
      <div>
        <img className={styles.img} src={require(`${URL}/arrow.png`)} alt="go back" />
        <img className={styles.img} src={require(`${URL}/home.png`)} alt="home" />
      </div>
      <p className={styles.title}>금주의 전단광고</p>
      <div>
        <img className={styles.img} src={require(`${URL}/menu.png`)} alt="menu" />
      </div>
    </header>
  );
});

export default header;