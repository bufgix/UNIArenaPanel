import React, { forwardRef } from "react";

type Item = {
  label: string;
  value: any;
};

type Props = {
  className: string;
  values?: Item[];
};

export default forwardRef(({ className, values }: Props, ref: any) => {
  return (
    <select className={className} ref={ref}>
      {values?.map((i) => {
        return (
          <option value={i.value} key={i.label}>
            {i.label}
          </option>
        );
      })}
    </select>
  );
});
