"use client";

import StoreProvider from "@/state/redux";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <StoreProvider>{children}</StoreProvider>;
};
export default Providers;
//Cho phép viết 1 loạt nhà cung cáp file thực sự cần thiết NextJs
