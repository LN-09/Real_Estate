import { FiltersState } from "@/state";
import { useAppSelector } from "@/state/redux";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";
const FilterBar = () => {
  const dispath = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const filters = useAppSelector((state) => state.global.filters);
  const isFillersfullOpen = useAppSelector(
    (state) => state.global.isFiltersFullOpen,
  );
  const viewMode = useAppSelector((state) => state.global.viewMode);
  const [searchInput, setSearchInput] = useState(filters.location);

  const updateURL = debounce((newFilters: FiltersState) => {});
  return <div>FilterBar</div>;
};

export default FilterBar;
