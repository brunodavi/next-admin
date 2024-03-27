"use client";

import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  function handleSearch(event) {
    const params = new URLSearchParams(searchParams);
    const value = event.target.value;

    params.set('page', 1)

    if (value) {
      value.length >= 3 && params.set("q", value);
    } else {
      params.delete("q");
    }
    router.replace(`${pathname}?${params}`);
  }

  const handleSearchDebounced = useDebouncedCallback(handleSearch, 300);

  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        onChange={handleSearchDebounced}
      />
    </div>
  );
};

export default Search;
