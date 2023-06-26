import React, { PropsWithChildren } from 'react';
import './LayoutBox.scss';

type Props = {} & PropsWithChildren;


export default function LayoutBox({children}: Props) {
  return (
    <div className="box-layout">
    {children}
</div>
  )
}