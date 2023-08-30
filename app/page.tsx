import AgentList from '@/app/AgentList';
import { Suspense } from 'react';
import Loading from '@/components/Loading';

const fetchAgents = async () => {
    const res = await fetch('https://valorant-api.com/v1/agents/');
    return res.json();
};

export default async function Home() {
    const { data } = await fetchAgents();
    const agents = data.filter((agent: any) => agent.isPlayableCharacter);

    return (
        <Suspense fallback={<Loading text="Please wait..." />}>
            <AgentList agents={agents} />
        </Suspense>
    );
}
