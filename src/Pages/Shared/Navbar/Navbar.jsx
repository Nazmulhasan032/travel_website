
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';




const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <div className="h-[4rem] flex justify-between items-center px-4 w-full bg-transparent absolute z-10">
                <div className="logo text-4xl font-bold pl-5">TravelA</div>
                <div className='pr-6 md:hidden relative'>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}><FaBars className='text-3xl' /></button>


                </div>
                {isMenuOpen && (<div className='md:hidden mt-8 pl-10 text-2xl font-semibold absolute top-10 left-0 w-full z-10'>
                    <ul className='w-2/3 mx-auto py-8 rounded-2xl bg-white bg-opacity-40 text-center'>
                        <Link className='hover:text-cyan-200 hover:border-b-4 rounded-md hover:border-cyan-400'><li>Home</li></Link>
                        <Link className='hover:text-cyan-200 hover:border-b-4 rounded-md hover:border-cyan-400'><li>Destination</li></Link>
                        <Link className='hover:text-cyan-200 hover:border-b-4 rounded-md hover:border-cyan-400'><li>Resort</li></Link>
                        <Link className='hover:text-cyan-200 hover:border-b-4 rounded-md hover:border-cyan-400'><li>Blog</li></Link>
                        <Link className='hover:text-cyan-200 hover:border-b-0 rounded-md hover:border-cyan-400'><button className='bg-[#40c2f9] mt-2 px-3 pb-1 rounded-md'><li>Login</li></button></Link>

                    </ul>
                </div>)}

                <div className="pr-6 hidden md:block">
                    <ul className="text-center text-xl text-white font-semibold flex gap-x-14 h-[4rem] justify-center items-center">
                        <Link className='hover:text-cyan-200 hover:border-b-4 rounded-md hover:border-cyan-400'>Home</Link>
                        <Link className='hover:text-cyan-200 hover:border-b-4 rounded-md hover:border-cyan-400'><li>Destination</li></Link>
                        <Link className='hover:text-cyan-200 hover:border-b-4 rounded-md hover:border-cyan-400'><li>Resort</li></Link>
                        <Link className='hover:text-cyan-200 hover:border-b-4 rounded-md hover:border-cyan-400'><li>Blog</li></Link>
                        <Link className='hover:text-cyan-200 hover:border-b-0 rounded-md hover:border-cyan-400'><button className='bg-[#40c2f9] mt-2 px-3 pb-1 rounded-md'><li className='!text-md px-2 py-1'>Login</li></button></Link>

                    </ul>
                </div>
            </div>

        </>
    );
};

export default Navbar;