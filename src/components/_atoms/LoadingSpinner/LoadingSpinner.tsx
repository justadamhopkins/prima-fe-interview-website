import styles from "./LoadingSpinner.module.css";

export const LoadingSpinner = () => {
  return <span data-testid="loadingSpinner" className={styles.loader} />;
};
