import { FaMapMarkerAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const Card = ({ item }) => {
    const {id, image, location, destination_name, description } = item;

    const shortDescription = description.slice(0 , 72);


    const showModal = (item) =>{
        Swal.fire({
            title: `${item.destination_name}`,
            text: `${item.destination_name} is situated in ${item.location}, ${item.description}`,
            imageUrl: `${item.image}`,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
    }

    return (
        <div>
            <div className="w-11/12 mx-auto p-4 mb-4 h-full rounded bg-white shadow-2xl flex flex-col">
                <div className="flex-grow">
                    <img className="w-full h-64 object-fit rounded transition-transform transform hover:scale-105" src={image} alt="" />
                    <div className="px-4">
                        <p className="font-bold text-xl mt-4 mb-2">{destination_name}</p>
                        <div className="flex items-center mb-2">
                            <FaMapMarkerAlt />
                            <p className="pl-1 font-medium">{location}</p>
                        </div>
                        <p>{shortDescription} ...</p>
                    </div>
                </div>
                <button onClick={()=>showModal(item)} className="bg-sky-400 ml-4 w-24 px-4 py-1 rounded hover:bg-sky-700 mt-4">More...</button>
            </div>

        </div>
    );
};

export default Card;