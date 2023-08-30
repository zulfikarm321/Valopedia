import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function loading() {
    return (
        <div className="min-h-[85vh] flex items-center justify-center">
            <h1 className="text-3xl animate-pulse text-primary flex items-center gap-3">
                Please wait...{' '}
                <AiOutlineLoading3Quarters className="animate-spin" />
            </h1>
        </div>
    );
}

export default loading;
