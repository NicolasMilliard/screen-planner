import { FC } from "react";
import Searchbar from "./Searchbar";
import Avatar from "./Avatar";

const Navbar: FC = () => {
  return (
    <div className="flex justify-between py-10 px-20 bg-gradient-to-b from-white-100 to-transparent dark:from-black-900">
      <Searchbar />
      <Avatar />
    </div>
  );
};

export default Navbar;
