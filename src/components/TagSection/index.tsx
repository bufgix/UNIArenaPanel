import React, { HTMLProps, useEffect, useState } from "react";
import { useQuery } from "react-query";

import { getTags, Tag } from "@/firestore";
import Loading from "../Loading";
import Dropdown, { DropdownItem } from "../Dropdown";

type Props = {} & HTMLProps<HTMLDivElement>;

export default function TagSection({ className, ...props }: Props) {
  const { data, isLoading } = useQuery("tags", getTags);
  const [current, setCurrent] = useState<Tag | undefined>();

  useEffect(() => {
    if (data) setCurrent(data[0]);
  }, [isLoading]);

  if (isLoading) {
    return <Loading size={30} color="#536DFE" />;
  }

  return (
    <Dropdown defaultValue={current?.name as string} className={className}>
      {data?.map((tag) => (
        <DropdownItem
          key={tag.name}
          value={tag.name}
          onClick={() => setCurrent(tag)}
        />
      ))}
    </Dropdown>
  );
}
