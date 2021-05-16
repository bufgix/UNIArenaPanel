import React from "react";

type Props = {
  text: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function Button({ text, className, ...props }: Props) {
  return (
    <button className={className} {...props}>
      {text}
    </button>
  );
}

Button.defaultProps = {
  type: "button",
} as Props;
