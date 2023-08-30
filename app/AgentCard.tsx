import Image from 'next/image';

function AgentCard({ agent }: any) {
    return (
        <div className="group bg-white hover:bg-[rgb(17,17,17)] flex items-center border-2 border-dark rounded-lg shadow-md h-40 overflow-hidden ">
            <Image
                width={120}
                height={60}
                src={agent.displayIcon}
                alt={agent.displayName}
                loading="lazy"
                className="w-full h-auto flex-1"
            />

            <div className="body relative flex items-center justify-center flex-1 h-full text-center uppercase">
                <h1 className="absolute z-10 text-3xl font-black 0 mb-2 italic text-dark group-hover:text-[#FF4655] group-hover:scale-110 transition-transform ">
                    {agent.displayName}
                </h1>

                <img
                    src={agent.role.displayIcon}
                    alt={agent.role.displayName}
                    className="absolute -right-full  group-hover:right-1 transition-all ease-in-out duration-500"
                    width={120}
                />
            </div>
        </div>
    );
}

export default AgentCard;
