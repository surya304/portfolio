import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Image from 'next/image';
import { EyeIcon, XIcon } from '@heroicons/react/24/outline';
const Projects = () => {
  const [loaded, setLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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
      title: 'BioTree',
      description: 'Created an App Where You Can put all your social media Links In one place and share it.',
      imageUrl: 'https://mybucket4345.s3.us-east-2.amazonaws.com/portfolio/tapshort.png',
      redirectURL: 'https://github.com/surya304/BioTree1',
      websiteurl: 'https://biotree.onrender.com/',
    },
    {
      id: 1,
      title: 'School Management Application',
      description: 'A comprehensive School Management System built with Next.js, Express.js, and MongoDB.',
      imageUrl: 'https://mybucket4345.s3.us-east-2.amazonaws.com/portfolio/Screenshot+2024-05-03+163439.png',
      websiteurl: 'https://school-management-ruddy.vercel.app/',
      redirectURL: 'https://github.com/surya304/school_management1',
    },
    {
      id: 3,
      title: 'DevFinds',
      description: 'DevFinds is a web application that provides various utilities for developers.',
      imageUrl: 'https://mybucket4345.s3.us-east-2.amazonaws.com/portfolio/Screenshot+2024-05-03+183550.png',
      redirectURL: 'https://github.com/surya304/DevFinds21',
      websiteurl: 'https://dev-finds21.vercel.app/',
    },
    {
      id: 4,
      title: 'developers911',
      description: 'This is a Documentation platform where you will  find all the necessary code and  for Building a Full Stack Web App.',
      imageUrl: 'https://mybucket4345.s3.us-east-2.amazonaws.com/portfolio/developer911.PNG',
      websiteurl: 'https://developers911.vercel.app/',
      redirectURL:'https://github.com/surya304/developers911'
      }
  ];

  return (
    <div className="bg-custom">
      <Navigation navigation={navigation} />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="bg-custom-back px-6 py-32 lg:px-8 rounded-xl">
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
              <p className="text-base font-semibold leading-7 text-indigo-600">My Personal Projects</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                These are some of the Personal projects I have created.
              </h1>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                  <div key={project.id} style={{ animationDelay: `${index * 0.15}s` }}>
                    <ProjectCard project={project} setSelectedImage={setSelectedImage} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50" onClick={() => setSelectedImage(null)}>
          <div className="relative p-4 bg-white rounded-lg shadow-lg max-w-3xl">
            {/* <button className="absolute top-2 right-2 text-black-600 hover:text-gray-900" onClick={() => setSelectedImage(null)}>
              ✖
            </button> */}

            <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-2 right-2 p-1 bg-black/75 rounded hover:bg-black/75 transition-colors text-white"
          >

   ✖
             </button>
            <Image src={selectedImage} alt="Enlarged Image" width={800} height={450} className="rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

const ProjectCard = ({ project, setSelectedImage }) => {
  return (
    <div className="flex flex-col shadow-md rounded-xl p-4 bg-white transform hover:scale-105 transition-transform duration-500 ease-in-out animate-fade-in-top-bottom relative" style={{ backgroundColor: '#BDDFF9', height: '400px' }}>
      <div className="relative">
        <Image src={project.imageUrl} alt={project.title} width={400} height={225} className="rounded-t-xl" />
     

        <button 
            onClick={() => setSelectedImage(project.imageUrl)}
            className="absolute top-2 right-2 p-1 bg-black/50 rounded-full hover:bg-black/75 transition-colors"
          >
            <EyeIcon className="h-6 w-6 text-white" />
          </button>
      </div>
      <div className="mt-4 flex-grow">
        <h3 className="text-lg font-semibold text-black">{project.title}</h3>
        <p className="text-sm text-gray-600">{project.description}</p>
        {project.websiteurl && <a href={project.websiteurl} target='_blank' rel='noreferrer' className="text-indigo-600 hover:text-indigo-800 mt-2 inline-block underline">Visit Website</a>}
        <br />
        {project.redirectURL && <a href={project.redirectURL} target='_blank' rel='noreferrer' className="text-indigo-600 hover:text-indigo-800 mt-2 inline-block underline">Read More on GitHub</a>}
     
        <div className="mt-2">
          <p className="text-xs text-red-600 font-medium">Important: Please wait for a while while the server starts from cold start. Its on free tier.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
