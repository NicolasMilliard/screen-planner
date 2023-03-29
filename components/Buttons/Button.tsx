import { FC, ReactElement, MouseEventHandler } from "react";

export interface Props {
  icon: ReactElement | null;
  text: string;
  customFunc: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<Props> = ({ icon: Icon, text, customFunc }) => {
  return (
    <button
      className="flex items-center ml-8 p-4 bg-red-500 hover:bg-red-900 text-white-100 rounded-2xl"
      onClick={customFunc}
    >
      {Icon}
      <span>{text}</span>
    </button>
  );
};

export default Button;
