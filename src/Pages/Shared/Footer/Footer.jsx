import { FaStudiovinari } from "react-icons/fa";
// import img from "../../../assets/img/Travel.png";

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-800 text-white p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex items-center mb-6 mr-16">
                <FaStudiovinari className="text-6xl text-sky-500 mr-4"/>
                    <p>Travela<br />Providing reliable service since 2022</p>
                </div>

                <nav className="mb-4 flex flex-col">
                    <header className="text-lg font-bold mb-2">Services</header>
                    <a className="text-blue-400 hover:underline">BD Tour</a>
                    <a className="text-blue-400 hover:underline">Foreign Tour</a>
                    <a className="text-blue-400 hover:underline">Family Package</a>
                    <a className="text-blue-400 hover:underline">Advertisement</a>
                </nav>

                <nav className="mb-4 flex flex-col">
                    <header className="text-lg font-bold mb-2">Company</header>
                    <a className="text-blue-400 hover:underline">About us</a>
                    <a className="text-blue-400 hover:underline">Contact</a>
                    <a className="text-blue-400 hover:underline">Jobs</a>
                    <a className="text-blue-400 hover:underline">Press kit</a>
                </nav>

                <nav className="mb-4 flex flex-col">
                    <header className="text-lg font-bold mb-2">Legal</header>
                    <a className="text-blue-400 hover:underline">Terms of use</a>
                    <a className="text-blue-400 hover:underline">Privacy policy</a>
                    <a className="text-blue-400 hover:underline">Cookie policy</a>
                </nav>
            </footer>



        </>
    );
};

export default Footer;