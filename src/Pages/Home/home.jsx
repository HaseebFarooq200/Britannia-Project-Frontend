import React, { useState } from 'react';
import JourneyForm from '../../Components/JourneyForm/journey_form';
import AvailableCars from '../../Components/AvailableCars/available_cars';
const Home = () => {
    const [showAvailableCars, setShowAvailableCars] = useState(false);
    return (

        <div className={` ${showAvailableCars ? "h-full" : "h-screen"} lg:h-full bg-homepageimage bg-cover bg-center pb-5`}>
            <div className='flex flex-col lg:flex-row justify-center items-center' >
                <div className='w-full ' >
                    <JourneyForm ToggleAvailableCars={() => setShowAvailableCars(!showAvailableCars)} />
                </div>
                <div className='w-full ' >
                    {showAvailableCars && <AvailableCars />}
                </div>
            </div>
        </div>


    );
}

export default Home;
