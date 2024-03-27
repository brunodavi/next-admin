"use client";

import { ITEM_PER_PAGE } from "@/app/lib/settings";
import styles from "./pagination.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const page = parseInt(searchParams.get("page") || "1");

  const params = new URLSearchParams(searchParams);

  const hasPrev = ITEM_PER_PAGE * (page - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (page - 1) + ITEM_PER_PAGE < count;

  const setPage = (value) => {
    params.set("page", value)
    router.replace(`${pathname}?${params}`)
  }

  const handlePrev = () => setPage(page - 1);
  const handleNext = () => setPage(page + 1);

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={handlePrev}
      >
        Previous
      </button>

      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
