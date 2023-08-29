import Content from './Content';
import AgentImage from './AgentImage';
import Abilities from './Abilities';

const fetchAgent = async (id: string) => {
    const res = await fetch('https://valorant-api.com/v1/agents/' + id);
    return res.json();
};

async function Detail({ params }: { params: { agentId: string } }) {
    const { data } = await fetchAgent(params.agentId);

    return (
        <div className="flex flex-col lg:flex-row items-center gap-10 min-h-[85vh] ">
            <div className="flex-1">
                <AgentImage agent={data} />
            </div>
            <div className="flex-1 border-4 border-gray-800 rounded-lg bg-white">
                <Content agent={data} />
                <Abilities abilities={data.abilities} />
            </div>
        </div>
    );
}

export default Detail;
