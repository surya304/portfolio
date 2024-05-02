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
    { name: 'Work', href: '/new_version', current: false },
    { name: 'About', href: '/aboutus', current: false },
    { name: 'Projects', href: '/projects', current: true },
    { name: 'Contact', href: 'https://tally.so/r/3XeBR4', current: false },
  ];

  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'This is a brief description of Project 1.',
      imageUrl: 'https://mybucket4345.s3.us-east-2.amazonaws.com/portfolio/gm-website+3.png',
      showbtn: true
    },
    {
      id: 2,
      title: 'TapShort',
      description: 'Created an App Where You Can put all your social media Links In one place and share it you can keep it in insta bio or any where you want to share your social media links.',
      imageUrl: 'https://mybucket4345.s3.us-east-2.amazonaws.com/portfolio/tapshort.png',
      redirectURL: 'https://github.com/surya304/BioTree',
      websiteurl: 'https://tapshort.com',
      showbtn: true

    }, {
      id: 3,
      title: 'Project 2',
      description: 'This is a brief description of Project 2.',
      imageUrl: 'https://mybucket4345.s3.us-east-2.amazonaws.com/portfolio/gm-website+3.png',
      showbtn: false

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
              <p className="text-base font-semibold leading-7 text-indigo-600">My Projects</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                My Journey to become a Front End Developer:
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
      <div className="bg-white p-4 rounded-lg max-w-2xl max-h-full overflow-auto">
        <button 
        onClick={triggerclick}
        className="absolute bottom-5 right-5 text-white text-5xl">&times;</button>
        <img src={imageUrl} alt="Enlarged" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Projects;