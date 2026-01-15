import type { PropsWithChildren } from "react";
import styles from "./DetailTerm.module.css";

type TDetailTermProps = {
  label: string;
};

export const DetailTerm = ({ label, children }: PropsWithChildren<TDetailTermProps>) => {
  return (
    <>
      <dt className={styles.detail__term}>{label}:</dt>
      <dd className={styles.detail__description}>{children}</dd>
    </>
  );
};
