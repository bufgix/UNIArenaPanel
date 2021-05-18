import React from "react";
import cn from "classnames";

type Props = {} & React.HTMLProps<HTMLFormElement>;

export default function Form({ children, className, ...props }: Props) {
  return (
    <form className={cn("mx-2 overflow-hidden", className)} {...props}>
      {children}
    </form>
  );
}
