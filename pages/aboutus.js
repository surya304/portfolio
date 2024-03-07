import React from 'react';
import { useState,useEffect } from 'react';
import Navigation from '../components/Navigation';
import Image from 'next/image';

import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'


const AboutUs = () => {
    const [loaded, setLoaded] = useState(false);



    useEffect(() => {
      setLoaded(true);
  
  
    }, []);

 const navigation = [
  { name: 'Work', href: '/new_version', current: false },
  { name: 'About', href: '/aboutus', current: true },
  {
    name:'projects',
    href:'/projects',
    current:false
  },
  { name: 'Contact', href: '#', current: false },

];


    return (
        <div className="bg-custom">

            <Navigation navigation={navigation}  />


            <div className="relative isolate px-6 pt-14 lg:px-8" >


<div className="mx-auto max-w-6xl p">

<div >
 


  <div className="bg-custom-back px-6 py-32 lg:px-8 sm-rounded-6xl lg-rounded-8xl">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-indigo-600">About Me </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">

        My Journey to become a Front End Developer : 
        </h1>

        <p className='mt-8'>
         I&#39;m from Hyderabad, India. I finished my Computer Science degree back in 2018. During my final year in college, I really wanted to follow my passion for becoming a UI developer, so I joined a startup called Aquo Digital, which was into growth hacking and digital marketing.
        </p>
        <div className="mt-7 max-w-2xl">
          <p>
            Later on, with the same group of people, we started a SAAS company called <a href='https://greymetrics.com/' className='hover:text-blue-500 underline' target='_blank' rel='noreferrer' >GreyMetrics</a>. We eventually sold that company and then jumped into a new venture called <a href='https://www.videoform.com/' className='hover:text-blue-500 underline' target='_blank' rel='noreferrer' >VideoForm</a>.. We managed to raise an initial seed fund of 100k for it.
            </p>
      
          <p className="mt-8">
          I&apos;ve been working with this awesome group for almost 4 years. It all began as an intern, and then I moved to working full time, learning and figuring out how to grow the company one day at a time. Working in a startup means dedicating your time to building and trying to make the product better every day. Whether it&apos;s coming up with new ideas, finding easier ways to onboard users, or improving the overall user experience, it&apos;s been a unique and amazing journey.


          </p>

          <p className="mt-8">
          It wasn&apos;t a walk in the park, though. We faced a lot of failures, but I always tried to learn from those experiences and move forward.






            </p>

            <figure className="mt-16">
          <img
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src="./images/group_pic.jpg"
            alt="groupImage"
       
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon className="mt-0.5 h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
          Team that i worked with( 2018 - 2022)
          </figcaption>
        </figure>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">As a developer</h2>
          <p className="mt-6">
          I pay close attention to my code’s readability. Sure, I’ll put together something as quickly as possible to make it work, but after that I’ll spend a good amount of time commenting and organizing everything. I want you to feel welcome around my code.
          </p>
       
          <p className="mt-8">
          Clean, consistent, readable and maintainable code. It’s great when features work, but it’s even greater whenever they can stay that way, regardless of who’s working on them.
          </p>
           
          <p className="mt-8">
          I’m excited to work on new projects, because I learn something new every time. I’m excited for the next challenge . 
          </p>
           
          <p className="mt-8">
          I  always been captivated by the art of coding. There&apos;s this thrill in discovering fresh ways to write code that not only works but does so in a slick, efficient manner. I&apos;m on this perpetual quest to unravel the secrets behind crafting code that&apos;s not just functional but also crystal clear in its logic. And you know what? I&apos;m all for uncovering those ingenious little hacks that make the journey smoother. It&apos;s like cracking a puzzle that leads to a eureka moment every single time. There&apos;s something magical about it – diving deep into the labyrinth of code and emerging with solutions that are elegant and efficient.
          </p>
        </div>
    
        <div className="mt-16 max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">As a person</h2>
          <p className="mt-6">
          If I had to describe myself in one word, it would be **resourceful**. I’ll take a problem, break it into smaller bits and  Try to find a solution. Creativity has helped me sail around tough obstacles.

**I’m curious by nature and I love learning**. I’ve amassed a wide range of skills and interests that when put together, end up feeding my career in one way or another.
          </p>
      
        </div>



        <div className="mt-16 max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">As a colleague</h2>
          <p className="mt-6">
          My Favourite Part of Being a Software Developer is try to Build something with a Talented Bunch Of people who has Different Experiences and with Various thought Process . Thats why i worked with same bunch of People for 4 years and was part of 3 different Startups .
          
          </p>



          <p className="mt-6">
          I&apos;m a team player, with my background in engineering and art, I feel comfortable interacting with both the technically oriented people of the team as well as the artistically oriented ones. I will always go the extra mile to help my team.          
          </p>

          <p className="mt-6">
          My communications skills are excellent. I feel comfortable at conveying ideas in creative ways so that everyone can understand them.
               
          </p>

          <p className="mt-6">
          My experience working for a small startup gave me exposure to the business side of a tech company, while at the same time delivering industry standard results on the production side. I have lead projects and Delivered the Results .          
          
          If you are Interested after hearing this and want to know more about me . I&apos;d love to hear from you 
          </p>


      
        </div>
      </div>
    </div>

 



</div>
</div>

{/* // */}
</div>
           
        </div>
    );
};

export default AboutUs;
