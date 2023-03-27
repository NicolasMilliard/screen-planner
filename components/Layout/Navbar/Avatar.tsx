import { FC } from "react";
import Image from "next/image";

import avatar from "../../../public/images/avatar.jpg";

const Avatar: FC = () => {
  return (
    <button className="flex justify-center items-center w-12 h-12 rounded-full border-2 border-red-500">
      <div className="w-10 h-10 rounded-full">
        <Image src={avatar} alt="Avatar" className="rounded-full" />
      </div>
    </button>
  );
};

export default Avatar;
