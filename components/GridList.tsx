import React from 'react';

function GridList({
    children,
    min,
    gap
}: {
    children: React.ReactNode;
    min: string;
    gap: string;
}) {
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill, minmax(${
            min ? min : '320px'
        },1fr))`,
        gap: `${gap}`,
        margin: '20px 0'
    };

    return <div style={gridStyle}>{children}</div>;
}

export default GridList;
