import { useEffect, useState } from "react";
import Card from "../../../Components/Card/Card";
import Title from "../../../Components/Title/Title";


const MostVisited = () => {

    const [destination, setDestination] = useState([]);
    useEffect(() => {
        fetch("places.json")
            .then(res => res.json())
            .then(data => setDestination(data))
    }, [])





    return (
        <div className="mb-32">
            <Title subHeading="Tourist Spot in Bangladesh " Heading="Discover the Enchanting Beauty of Bangladesh"></Title>

            <div className="md:grid mx-auto md:gap-y-8 md:w-10/12 lg-w-10/12 lg:gap-y-8 md:grid-cols-2 lg:grid lg:grid-cols-3">
                {
                    destination.map(item => <Card
                        key={item.id}
                        item={item}
                    ></Card>)
                }

            </div>



        </div>
    );
};

export default MostVisited;