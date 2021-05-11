import React from "react";
import cn from "classnames";

type Props = {
  color: string;
  size: number;
  className: string;
};

export default function Loading({ color, size, className }: Props) {
  return (
    <svg
      className={cn(
        "animate-spin rounded-full bg-transparent border-transparent border-opacity-50",
        className
      )}
      style={{
        borderRightColor: color,
        borderTopColor: color,
        width: size,
        borderWidth: 4,
      }}
      viewBox={`0 0 24 24`}
    ></svg>
  );
}

Loading.defaultProps = {
  color: "white",
  size: 24,
} as Props;
