import AgentList from '@/app/AgentList';

const fetchAgents = async () => {
    const res = await fetch('https://valorant-api.com/v1/agents/');
    return res.json();
};

export default async function Home() {
    const { data } = await fetchAgents();
    const agents = data.filter((agent: any) => agent.isPlayableCharacter);

    return (
        <>
            <AgentList agents={agents} />
        </>
    );
}
