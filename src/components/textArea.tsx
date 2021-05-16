import React from "react";

type Props = {
  className: string;
  placeholder: string;
  rows: number;
};

export default function textArea({
  className,
  rows,
  placeholder,
}: Props) {
  return (
    <div>
      <textarea
        rows={rows}
        className={className}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}
