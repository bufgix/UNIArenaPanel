import React, { HTMLProps, memo, useState } from "react";
import cn from "classnames";

import { Tag } from "@/firestore";

type Props = {
  defaultValue: string;
} & HTMLProps<HTMLDivElement>;

function Dropdown({ className, defaultValue, children, ...props }: Props) {
  const [collapse, setCollapse] = useState<boolean>(false);

  return (
    <div
      className={cn(
        className,
        "relative ring-1 ring-primary p-2 m-2 cursor-pointer select-none"
      )}
      onClick={() => setCollapse(!collapse)}
      {...props}
    >
      <p>{defaultValue}</p>
      {collapse && (
        <div className="absolute top-11 left-0 z-50 bg-white w-full shadow-xl border-2 border-gray-200">
          {children}
        </div>
      )}
    </div>
  );
}

type ItemProps = {
  value: string;
} & HTMLProps<HTMLDivElement>;

function DropdownItem({ value, onClick, ...props }: ItemProps) {
  return (
    <div className="hover:bg-gray-100 p-2" onClick={onClick} {...props}>
      {value}
    </div>
  );
}

export { DropdownItem };
export default memo(Dropdown);
