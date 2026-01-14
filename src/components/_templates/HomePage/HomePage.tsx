import { HIGHLIGHT_VARIANTS, Highlight } from "@atoms/Highlight";
import { ROLES } from "@constants/roles.ts";
import { FilterBar } from "@molecules/FilterBar";
import { SearchInput } from "@molecules/SearchInput";
import styles from "./Homepage.module.css";

export const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <header className={styles.homepage__header}>
        <h1 className={styles.homepage__heading}>
          <Highlight variant={HIGHLIGHT_VARIANTS.PRIMARY}>User</Highlight> Dashboard
        </h1>
        <SearchInput onChange={() => null} handleSearch={() => null} value="" />
      </header>
      <div className={styles.homepage__container}>
        <FilterBar
          className={styles.homepage__filterWrapper}
          roles={Object.values(ROLES)}
          handleFilterSelection={() => null}
        />
      </div>
    </div>
  );
};
