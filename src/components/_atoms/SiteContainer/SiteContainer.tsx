import type { PropsWithChildren } from "react";
import styles from "./SiteContainer.module.css";

export const SiteContainer = ({ children }: PropsWithChildren) => {
  return <main className={styles.siteContainer}>{children}</main>;
};
