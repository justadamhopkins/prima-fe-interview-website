import { BUTTON_VARIANTS, Button } from "@atoms/Button";
import { HIGHLIGHT_VARIANTS, Highlight } from "@atoms/Highlight";
import { RawButton } from "@atoms/RawButton";
import { MOCK_USERS } from "@constants/fixtures/users.ts";
import { ROLES } from "@constants/roles.ts";
import { TSHIRT_SIZES } from "@constants/settings.ts";
import { useDisclosure } from "@hooks/useDisclosure";
import { DIALOG_LAYOUTS, DIALOG_VARIANTS } from "@molecules/Dialog";
import { FilterBar } from "@molecules/FilterBar";
import { SearchInput } from "@molecules/SearchInput";
import { FiltersDialog } from "@organisms/FiltersDialog";
import { UserCardList } from "@organisms/UserCardList";
import { useState } from "react";
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
        <div className={styles.homepage__filterWrapper}>
          <FilterBar
            className={styles["homepage__filterWrapper--bar"]}
            values={Object.values(ROLES)}
            selectedValue={[]}
            onValueChange={() => null}
          />
          <div className={styles["homepage__filterWrapper--dialog"]}>
            <FiltersDialog
              variant={DIALOG_VARIANTS.PRIMARY}
              layout={DIALOG_LAYOUTS.LEFT}
              onValueChange={() => ""}
              values={Object.values(ROLES)}
              selectedValue={[]}
            />
          </div>
        </div>
        <section>
          <UserCardList users={MOCK_USERS} />
        </section>
      </div>
    </div>
  );
};
