import { FC, ReactElement } from "react";
import Link from "next/link";

export interface Props {
  icon: ReactElement | string;
  text: string;
  link: string;
}

const SidebarLink: FC<Props> = ({ icon: Icon, text, link }) => {
  return (
    <Link
      href={link}
      className="flex items-center text-lg pl-4 py-2 text-black-900 hover:bg-red-500 hover:text-white-100 hover:rounded-2xl dark:text-white-100"
    >
      <span>{Icon}</span>
      <span className="ml-4">{text}</span>
    </Link>
  );
};

export default SidebarLink;
