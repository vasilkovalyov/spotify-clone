import React from 'react';
import { ListSkeletonsProps } from './list-skeletons.type';

function ListSkeletons({
  children,
  count = 12,
  className,
}: ListSkeletonsProps) {
  return (
    <div className={className}>
      {Array.from(Array(count).keys()).map((item) => (
        <React.Fragment key={item}>{children}</React.Fragment>
      ))}
    </div>
  );
}

export default ListSkeletons;
