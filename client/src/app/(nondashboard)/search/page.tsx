"use client";

import { NAVBAR_HEIGHT } from "@/lib/constants";
import { cleanParams } from "@/lib/utils";
import { setFilters } from "@/state";
import { useAppDispatch, useAppSelector } from "@/state/redux";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import FilterBar from "./FilterBar";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const dispath = useAppDispatch();
  const isFillersfullOpen = useAppSelector(
    (state) => state.global.isFiltersFullOpen
  );

  useEffect(() => {
    const initialFilters = Array.from(searchParams.entries()).reduce(
      (acc: any, [key, value]) => {
        if (key === "priceRange" || key === "squareFeet") {
          acc[key] = value.split(",").map((v) => (v === "" ? null : Number(v)));
        } else if (key === "coordinates") {
          acc[key] = value.split(",").map(Number);
        } else {
          acc[key] = value === "any" ? null : value;
        }
        return acc;
      },
      {}
    );
    const cleanedFilters = cleanParams(initialFilters);
    dispath(setFilters(cleanedFilters));
  }, []);

  return (
    <div
      className="w-full mx-auto flex flex-col"
      style={{
        height: `calc(100vh- ${NAVBAR_HEIGHT}px)`,
      }}
    >
      <FilterBar />
      <div className="flex justify-between flex-1 overflow-hidden gap-3 mb-5">
        <div
          className={`h-full overflow-auto translate-all duration-300 ease-in-out &{
            isFilterFullOpen
            ? "w-3/12 opacity-100 visible"
            : "w-0 opacity-0 invisible"
            }`}
        >
          {/* <FiltersFull/> */}
          FiltersFull
        </div>
        {/* <Map/> */}
        Map
        <div className="basic-4/12 overflow-y-auto">
          {/* <Listing/> */}
          Listing
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
