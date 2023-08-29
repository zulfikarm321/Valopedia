'use client';

import { useState } from 'react';
import AgentCard from './AgentCard';
import Link from 'next/link';
import GridList from './GridList';

function AgentList({ agents }: any) {
    const [keyword, setKeyword] = useState('');

    const handleKeyword = (event: any) => {
        setKeyword(event.target.value.toLowerCase().trim());
    };

    const filteredAgents = agents.filter((agent: any) =>
        agent.displayName.toLowerCase().includes(keyword)
    );

    return (
        <>
            <input
                type="text"
                placeholder="Search Agent"
                className="py-2 px-4 border-2 border-gray-900 rounded-md text-dark"
                value={keyword}
                onChange={handleKeyword}
            />
            <GridList min="320px" gap="20px">
                {filteredAgents.map((agent: any) => (
                    <Link href={'/' + agent.uuid} key={agent.uuid}>
                        <AgentCard agent={agent} />
                    </Link>
                ))}
            </GridList>
        </>
    );
}

export default AgentList;
