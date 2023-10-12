import video from "../../../assets/img/video1.mp4";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BiGroup } from "react-icons/bi";

const Banner = () => {
    return (
        <div>
            <div className="relative">
                <video className="w-full h-screen object-cover" src={video} autoPlay loop muted></video>

                <div className="absolute inset-0 pt-60">
                    <h2 className="text-center text-xl font-semibold">Our packages</h2>
                    <h1 className="text-center text-3xl font-bold">Search your Happiness</h1>

                    <div className="h-24 w-10/12 mx-auto md:grid md:grid-cols-3 md:gap-4">
                        <div>
                            <p className="mt-4 mb-2 font-medium text-xl">Search your destination</p>
                            <div className="relative">
                                <input className="w-full bg-slate-200 p-2 rounded-md focus:outline-none" type="text" placeholder="Enter name" name="text" />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <FaMapMarkerAlt></FaMapMarkerAlt>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="mt-4 mb-2 font-medium text-xl">Total member</p>
                            <div className="relative">
                                <input className="w-full bg-slate-200 p-2 rounded-md focus:outline-none" type="text" placeholder="Total member" name="text" />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                                    <BiGroup className="text-xl"></BiGroup>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="mt-4 font-medium text-xl">Select your date</p>
                            <input className="w-full focus:outline-none bg-slate-200 p-2 rounded-md mt-2" type="date" placeholder="Enter name" name="text" />
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Banner;