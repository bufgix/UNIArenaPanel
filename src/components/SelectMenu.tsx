import React, { forwardRef } from "react";

type Item = {
  label: string;
  value: any;
};

type Props = {
  className: string;
  values?: Item[];
} & React.HTMLProps<HTMLSelectElement>;

export default forwardRef(
  ({ className, values, ...props }: Props, ref: any) => {
    return (
      <select className={className} ref={ref} {...props}>
        {values?.map((i) => {
          return (
            <option value={i.value} key={i.label}>
              {i.label}
            </option>
          );
        })}
      </select>
    );
  }
);
