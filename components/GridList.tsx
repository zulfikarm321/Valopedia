import React from 'react';

function GridList({ children }: { children: React.ReactNode }) {
    const gridClass = `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5`;

    return <div className={gridClass}>{children}</div>;
}

export default GridList;
