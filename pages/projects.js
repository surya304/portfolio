import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Image from 'next/image';
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid';
import { redirect } from 'next/dist/server/api-utils';

const Projects = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const navigation = [
    { name: 'Work', href: '/', current: false },
    { name: 'About', href: '/aboutus', current: false },
    { name: 'Projects', href: '/projects', current: true },
    { name: 'Contact', href: 'https://tally.so/r/3XeBR4', current: false },
  ];

  const projects = [
    {
      id: 2,
      title: 'TapShort',
      description: 'Created an App Where You Can put all your social media Links In one place and share it you can keep it in insta bio or any where you want to share your social media links.',
      imageUrl: 'https://mybucket4345.s3.us-east-2.amazonaws.com/portfolio/tapshort.png',
      redirectURL: 'https://github.com/surya304/BioTree',
      websiteurl: 'https://tapshort.onrender.com',
      showbtn: true

    }, 
     
    {
      id: 1,
      title: 'School Management Application',
      description: 'This is a comprehensive School Management System built with Next.js, Express.js, and MongoDB. It provides a wide range of features to manage various aspects of a schools operations.',
      imageUrl: 'https://mybucket4345.s3.us-east-2.amazonaws.com/portfolio/Screenshot+2024-05-03+163439.png',
      redirectURL: 'https://github.com/surya304/school_management',
      showbtn: false
      
    },
    {
    id: 3,
      title: 'DevFinds',
      description: 'DevFinds is a web application that provides various utilities for developers.',
      imageUrl: 'https://mybucket4345.s3.us-east-2.amazonaws.com/portfolio/Screenshot+2024-05-03+183550.png',
      redirectURL: 'https://github.com/surya304/DevFinds21',
      websiteurl: 'https://dev-finds21.vercel.app/',
      showbtn: true

    },
    // Add more projects as needed
  ];

  return (
    <div className="bg-custom">
      <Navigation navigation={navigation} />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-6xl ">
          <div>
          <div className="bg-custom-back px-6 py-32 lg:px-8 rounded-xl">
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
              <p className="text-base font-semibold leading-7 text-indigo-600">My Personal Projects</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
               These are some of the Personal projects I have Created.
              </h1>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);

 function closeModal() {
  
    setModalOpen(false);

  }

  return (
    <div className="flex flex-col shadow-md rounded-xl p-4" style={{ backgroundColor: '#BDDFF9' }}>
  <div onClick={openModal} className="cursor-pointer ">

<Image
  src={project.imageUrl}
  alt={project.title}
  width={400}
  height={225}
  className="rounded-t-xl transition-opacity duration-300 ease-in-out hover:opacity-50"
/>

</div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-black">{project.title}</h3>
        <p className="text-sm text-gray-600">{project.description}</p>
        {project.title == 'TapShort' && <div className="flex items-center mt-2 text-sm text-gray-600">
          <InformationCircleIcon className="h-10 w-10 text-yellow-500" />
          <span className="ml-2">Please wait for 30 sec while the server starts . Currently I am using Free Tier 😅</span>
        </div>}
          
        {project.websiteurl && <a href={project.websiteurl} target='blank'  className="text-indigo-600 hover:text-indigo-800 mt-2 inline-block underline">Visit Website</a>}
        <br></br>
        {project.showbtn && <a href={project.redirectURL} target='blank' className="text-indigo-600 hover:text-indigo-800 mt-2 inline-block underline">Read More at github</a>}
      </div>
      <ImageModal isOpen={isModalOpen} close={closeModal} imageUrl={project.imageUrl} />
    </div>
  );
};

const ImageModal = ({ isOpen, close, imageUrl }) => {
  if (!isOpen) return null;

  function triggerclick() { 
    close();
  }

  return (
    <div className="fixed inset-0 bg-black flex justify-center items-center " >
      <div className="bg-white p-4 rounded-lg max-w-4xl max-h-full overflow-auto">
        <button 
        onClick={triggerclick}
        className="absolute bottom-5 right-5 text-white text-5xl">&times;</button>
        <img src={imageUrl} alt="Enlarged" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Projects;