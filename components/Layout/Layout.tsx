import React, { FC, ReactNode } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";

export interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }: Props) => {
  return (
    // This first div is use to set / unset the dark mode
    <div className="dark">
      <div className="flex h-screen bg-white-100 dark:bg-black-900">
        <Sidebar />
        <div className="w-full" style={{ marginLeft: "292px" }}>
          <Navbar />
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
