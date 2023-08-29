function AgentCard({ agent }: any) {
    return (
        <div className="group flex items-center border-2 border-gray-800  bg-white rounded-lg shadow-md h-40 overflow-hidden ">
            <img
                width={160}
                className={`object-cover  hover:bg-[#${agent.backgroundGradientColors[0]}] rounded-xl group-hover:scale-110 transition-transform duration-1000`}
                src={agent.displayIcon}
                alt={agent.displayName}
            />

            <div className="body flex items-center justify-center flex-1 h-full text-center uppercase">
                <h1 className="text-3xl font-black 0 mb-2 italic text-dark group-hover:text-[#FF4655] group-hover:scale-110 transition-transform ">
                    {agent.displayName}
                </h1>
            </div>
        </div>
    );
}

export default AgentCard;
