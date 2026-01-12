import styles from "./Homepage.module.css";

export const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <header>
        <h1 className={styles.homepage__heading}>
          <span>User</span> Dashboard
        </h1>
      </header>
    </div>
  );
};
