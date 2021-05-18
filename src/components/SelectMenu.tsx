import React from "react";

type Props = {
  className: string;
  values: string[];
};

export default function SelectMenu({ className, values }: Props) {
  return (
    <select className={className}>
      {values.map((i) => {
        return <option key={i}>{i}</option>;
      })}
    </select>
  );
}
