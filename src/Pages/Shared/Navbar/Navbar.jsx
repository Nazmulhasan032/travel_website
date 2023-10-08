

const Navbar = () => {
    return (
        <>
            <div className="h-[4rem] w-full bg-slate-400">

                <div className="container mx-auto">
                    <div className="grid grid-cols-3">
                        <div className="logo">Travel</div>

                        
                        <div className="col-span-2 invisible sm:visible">
                            <ul className="text-center text-2xl font-semibold flex gap-x-14 h-[4rem] justify-center items-center">
                                <li>Home</li>
                                <li>Home</li>
                                <li>Home</li>
                                <li>travel</li>
                                <li>get touch</li>

                            </ul>

                        </div>
                        <div className="flex-right text-3xl font-bold md:invisible">icon</div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Navbar;