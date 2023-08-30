import Link from 'next/link';

function Navbar() {
    return (
        <nav className="flex items-center bg-dark text-white">
            <div className="container flex flex-col md:flex-row items-center justify-between py-4">
                <h1 className="text-primary text-xl uppercase font-bold mb-2 md:m-0">
                    Valopedia.
                </h1>
                <div className="links uppercase">
                    <Link className="ms-4" href="/">
                        Agents
                    </Link>
                    <Link className="ms-4" href="/weapons">
                        Weapons
                    </Link>
                    <Link className="ms-4" href="/maps">
                        Maps
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
