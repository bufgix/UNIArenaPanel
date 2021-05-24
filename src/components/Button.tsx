import React from "react";
import cn from "classnames";

type Props = {
  text: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function Button({ text, className, ...props }: Props) {
  return (
    <button className={cn("disabled:opacity-50 ", className)} {...props}>
      {text}
    </button>
  );
}

Button.defaultProps = {
  type: "button",
} as Props;
