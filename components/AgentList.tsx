'use client';

import { useState } from 'react';
import AgentCard from './AgentCard';
import Link from 'next/link';

function AgentList({ agents }: any) {
    const [keyword, setKeyword] = useState('');

    const handleKeyword = (event: any) => {
        setKeyword(event.target.value.toLowerCase().trim());
    };

    const filteredAgents = agents.filter((agent: any) =>
        agent.displayName.toLowerCase().includes(keyword)
    );

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px,1fr))',
        gap: '20px',
        margin: '20px 0'
    };

    return (
        <>
            <input
                type="text"
                placeholder="Search Agent"
                className="py-2 px-4 border-2 border-gray-700 rounded-md text-dark"
                value={keyword}
                onChange={handleKeyword}
            />
            <div style={gridStyle}>
                {filteredAgents.map((agent: any) => (
                    <Link href={'/' + agent.uuid}>
                        <AgentCard key={agent.uuid} agent={agent} />
                    </Link>
                ))}
            </div>
        </>
    );
}

export default AgentList;
