import React, { FC, ReactNode } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar";

export interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }: Props) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div>
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
