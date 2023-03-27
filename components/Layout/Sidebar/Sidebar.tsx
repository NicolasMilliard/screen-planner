import { FC } from "react";
import SidebarLink from "./SidebarLink";
import GenresList from "./GenresList";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ExploreIcon from "@mui/icons-material/Explore";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar: FC = () => {
  return (
    <div
      className="fixed p-10 flex flex-col justify-between h-full border-r bg-white-100 border-black-500 dark:bg-black-900"
      style={{ width: "292px" }}
    >
      {/* Sidebar menu */}
      <div>
        <h1 className="text-3xl text-black-900 font-bold mb-16 dark:text-white-100">Screen Planner</h1>
        {/* User feed */}
        <div className="mb-16">
          <h2 className="uppercase text-xl text-black-100 mb-6 tracking-widest">Your feed</h2>
          <ul>
            <li>
              <SidebarLink icon={<ExploreIcon />} text="Explore" link="#" />
            </li>
            <li>
              <SidebarLink icon={<FavoriteIcon />} text="Watchlist" link="#" />
            </li>
          </ul>
        </div>
        {/* Available genres */}
        <div>
          <h2 className="uppercase text-xl text-black-100 mb-6 tracking-widest">Genres</h2>
          {/* Scrollable section */}
          <div className="relative h-96">
            <div className="overflow-auto scrollable-section" style={{ height: "inherit" }}>
              {/* Genre list */}
              <GenresList />
              <div className="w-full h-8 absolute left-0 bottom-0 bg-gradient-to-t from-white-100 to-transparent dark:from-black-900"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Disconnect button */}
      <div className="border-t border-black-500">
        <button className="w-full mt-8 pl-4 py-2 text-red-900 hover:bg-red-500 hover:text-white-100 hover:rounded-2xl flex items-center text-lg">
          <LogoutIcon />
          <span className="ml-4">Log out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
