import Aside from '@/widgets/aside';
import React, { PropsWithChildren } from 'react';

const layout = ({children}: PropsWithChildren<unknown>) => {
  return (
    <div className="app-container">
       <Aside/>
       {children}
    </div>
  );
};

export default layout;