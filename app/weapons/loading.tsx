import React from 'react';

function loading() {
    return (
        <div className="min-h-[85vh] flex items-center justify-center">
            <h1 className="text-3xl animate-pulse text-primary">
                Please wait...
            </h1>
        </div>
    );
}

export default loading;
