import { HIGHLIGHT_VARIANTS, Highlight } from "@atoms/Highlight";
import { LoadingSpinner } from "@atoms/LoadingSpinner";
import { ROLES } from "@constants/roles.ts";
import { useQueryParams } from "@hooks/useQueryParams/useQueryParams.ts";
import { DIALOG_LAYOUTS, DIALOG_VARIANTS } from "@molecules/Dialog";
import { FilterBar } from "@molecules/FilterBar";
import { SearchInput } from "@molecules/SearchInput";
import { FiltersDialog } from "@organisms/FiltersDialog";
import { UserCardList } from "@organisms/UserCardList";
import { type ChangeEvent, type FormEvent, useEffect, useState } from "react";
import styles from "./Homepage.module.css";
import {TUser} from "@app/types/api.ts";


type TRequestState =
    | { status: 'idle' }
    | { status: 'loading' }
    | { status: 'success'; data: TUser[] }
    | { status: 'error'; error: string };

export const HomePage = () => {
  const queryParams = useQueryParams();
  const searchQuery = queryParams.get("search");
  const rolesQuery = queryParams.get("roles");
  const [searchTerm, setSearchTerm] = useState<string>(searchQuery || "");
  const [requestState, setRequestState] = useState<TRequestState>({ status: 'idle' });

  const hasSearched = Boolean(searchQuery);
  const isLoading = requestState.status === 'loading';
  const isError = requestState.status === 'error';
  const users = requestState.status === 'success' ? requestState.data : [];

  useEffect(() => {
    const payload = Object.fromEntries(queryParams.all.entries());

    if (!payload.search) {
      setRequestState({ status: 'idle' });
      return;
    }

    const fetchUsers = async () => {
      setRequestState({ status: 'loading' });
      try {
        const response = await fetch(`https://api.prima.com/users?${queryParams.all.toString()}`);

        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }

        const data = await response.json();

        setRequestState({ status: 'success', data: data.data });
      } catch(error: unknown) {
        setRequestState({
          status: 'error',
          error: error instanceof Error ? error.message : 'Unknown error occurred'
        });
      }
    };

    fetchUsers();
  }, [queryParams.all]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!searchTerm) {
      return;
    }

    queryParams.set({ search: searchTerm });
  };

  return (
    <div className={styles.homepage}>
      <section className={styles.homepage__header}>
        <h1 className={styles.homepage__heading}>
          <Highlight variant={HIGHLIGHT_VARIANTS.PRIMARY}>User</Highlight> Dashboard
        </h1>
        <SearchInput
          onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value)}
          handleSearchSubmit={handleSubmit}
          value={searchTerm}
        />
      </section>
      {hasSearched && (
        <div className={styles.homepage__container}>
          <div className={styles.homepage__filterWrapper}>
            <FilterBar
              className={styles["homepage__filterWrapper--bar"]}
              values={Object.values(ROLES)}
              selectedValue={rolesQuery?.split(",") || []}
              onValueChange={(values: string[]) => queryParams.set({ roles: values.join(",") })}
            />
            <div className={styles["homepage__filterWrapper--dialog"]}>
              <FiltersDialog
                variant={DIALOG_VARIANTS.PRIMARY}
                layout={DIALOG_LAYOUTS.LEFT}
                values={Object.values(ROLES)}
                selectedValue={rolesQuery?.split(",") || []}
                onValueChange={(values: string[]) => queryParams.set({ roles: values.join(",") })}
              />
            </div>
          </div>
          {isLoading && (
            <div className={styles.homepage__stateWrapper}>
              <LoadingSpinner />
              <p>Loading....</p>
            </div>
          )}

          {isError && (
            <div className={styles.homepage__stateWrapper}>
              <p>An error has occurred. Please retry in a few moments!</p>
            </div>
          )}
          {users.length > 0 && !isLoading && (
            <section>
              <UserCardList users={users} />
            </section>
          )}
          {users.length === 0 && !isLoading && !isError && (
            <div className={styles.homepage__stateWrapper}>
              <p>No search results found please try again!</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
