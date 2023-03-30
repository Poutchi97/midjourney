export default function NavBar(){
    return(
        <>
            <nav className="w-full flex items-center justify-center bg-transparent text-zinc-200 min-h-[75px]">
                <ul className="list-none flex">
                    <li className="mx-3 hover:text-cyan-400 hover:cursor-pointer font-semibold">Cyberpunk</li>
                    <li className="mx-3 hover:text-cyan-400 hover:cursor-pointer font-semibold">Portrait</li>
                    <li className="mx-3 hover:text-cyan-400 hover:cursor-pointer font-semibold">Abstract</li>
                </ul>
            </nav>
        </>
    )
}