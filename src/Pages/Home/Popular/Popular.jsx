
import { useEffect, useState } from 'react';
import Title from '../../../Components/Title/Title';
import Card from '../../../Components/Card/Card';

const Popular = () => {

    const [popular, setPopular] = useState([]);
    useEffect( ()=>{
        fetch("Popular.json")
        .then(res => res.json())
        .then(data => setPopular(data))
    } ,[])




    return (
        <div>
            <Title subHeading="Most Popular destinations" Heading="Unveiling the Charms of Iconic Landmarks and Vibrant Cultural Hubs"></Title>

            <div className="md:grid mx-auto md:gap-y-8 md:w-10/12 lg-w-10/12 lg:gap-y-8 md:grid-cols-2 lg:grid lg:grid-cols-3">
                {
                    popular.map(item => <Card
                        key={item.id}
                        item={item}
                    ></Card>)
                }

            </div>

        </div>
    );
};

export default Popular;