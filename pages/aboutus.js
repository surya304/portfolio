import React from 'react';
import { useState,useEffect } from 'react';
import Navigation from '../components/Navigation';

const AboutUs = () => {
    const [loaded, setLoaded] = useState(false);



    useEffect(() => {
      setLoaded(true);
  
  
    }, []);
    const navigation = [
        { name: 'Work', href: '#', current: true },
        { name: 'About', href: '#', current: false },
        { name: 'Contact', href: '#', current: false },
      ]


    return (
        <div className="bg-custom">

            <Navigation navigation={navigation}  />


            <div className="relative isolate px-6 pt-14 lg:px-8" >


<div className="mx-auto max-w-6xl p">

<div className="text-center">
  {/* <h1 className="text-6xl font-bold tracking-tight custom-text-color text-center sm:text-8xl relative" > */}
  <h1 className={`title-font text-6xl font-bold tracking-tight custom-text-color text-center sm:text-6xl ${loaded ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-1000`}>

  
   About Me



  </h1>




</div>
</div>

{/* // */}
</div>
           
        </div>
    );
};

export default AboutUs;
