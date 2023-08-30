import Content from './Content';
import AgentImage from './AgentImage';
import Abilities from './Abilities';
import { Suspense } from 'react';
import Loading from '@/components/Loading';

const fetchAgent = async (id: string) => {
    const res = await fetch('https://valorant-api.com/v1/agents/' + id);
    return res.json();
};

async function Detail({ params }: { params: { agentId: string } }) {
    const { data } = await fetchAgent(params.agentId);

    return (
        <Suspense fallback={<Loading text="Wait for the agent..." />}>
            <div className="flex flex-col items-center lg:flex-row lg:items-start gap-5 ">
                <div className="flex-1">
                    <AgentImage agent={data} />
                </div>
                <div className="flex-1 border-2 border-dark rounded-lg bg-white">
                    <Content agent={data} />
                    <Abilities abilities={data.abilities} />
                </div>
            </div>
        </Suspense>
    );
}

export default Detail;
