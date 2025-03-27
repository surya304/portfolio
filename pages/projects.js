import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Image from 'next/image';
import { EyeIcon } from '@heroicons/react/24/outline';

const Projects = () => {
  const [loaded, setLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedImage) {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    // Prevent scrolling when modal is open
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);

  const navigation = [
    { name: 'Work', href: '/', current: false },
    { name: 'About', href: '/aboutus', current: false },
    { name: 'Projects', href: '/projects', current: true },
    { name: 'Contact', href: 'https://tally.so/r/3XeBR4', current: false },
  ];

  const personalProjects = [
    {
      id: 2,
      title: 'BioTree',
      description: 'Created an App Where You Can put all your social media Links In one place and share it.',
      imageUrl: 'https://mybucket4345.s3.us-east-2.amazonaws.com/portfolio/tapshort.png',
      redirectURL: 'https://github.com/surya304/BioTree1',
      websiteurl: 'https://biotree.onrender.com/',
      technologies: ['HTML/CSS', 'JavaScript', 'jQuery', 'AJAX', 'REST API', 'MongoDB', 'Express.js', 'Node.js', 'Mongoose', 'Authentication', 'Bootstrap']
    },
    {
      id: 1,
      title: 'School Management Application',
      description: 'A comprehensive School Management System built with Next.js, Express.js, and MongoDB.',
      imageUrl: 'https://mybucket4345.s3.us-east-2.amazonaws.com/portfolio/Screenshot+2024-05-03+163439.png',
      websiteurl: 'https://school-management-ruddy.vercel.app/',
      redirectURL: 'https://github.com/surya304/school_management1',
      technologies: ['Next.js', 'React', 'Express.js', 'MongoDB', 'Node.js', 'Tailwind CSS', 'JWT Authentication', 'REST API']
    },
    {
      id: 3,
      title: 'DevFinds',
      description: 'DevFinds is a web application that provides various utilities for developers.',
      imageUrl: 'https://mybucket4345.s3.us-east-2.amazonaws.com/portfolio/Screenshot+2024-05-03+183550.png',
      redirectURL: 'https://github.com/surya304/DevFinds21',
      websiteurl: 'https://dev-finds21.vercel.app/',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'API Integration', 'Vercel']
    },
    {
      id: 4,
      title: 'developers911',
      description: 'This is a Documentation platform where you will find all the necessary code and for Building a Full Stack Web App.',
      imageUrl: 'https://mybucket4345.s3.us-east-2.amazonaws.com/portfolio/developer911.PNG',
      websiteurl: 'https://developers911.vercel.app/',
      redirectURL: 'https://github.com/surya304/developers911',
      technologies: ['Next.js', 'React', 'Markdown', 'MDX', 'Tailwind CSS', 'Code Highlighting', 'Responsive Design']
    }
  ];

  const companyProjects = [
    {
      id: 1,
      title: 'Elim5 Website Redesign',
      description: 'Led a comprehensive redesign of the company website focusing on WCAG 2.1 compliance (implementing ARIA labels, proper contrast ratios) and improved user experience. Integrated Mautic and OpenPhone systems to enhance marketing automation.',
      imageUrl: 'https://mybucket4345.s3.us-east-2.amazonaws.com/elim.png',
      websiteurl: 'https://elim5.com/',
      technologies: ['HTML/CSS', 'JavaScript','JQuery', 'WCAG 2.1 Compliance' ,'CSS animations' , 'Lottie Animations' ]
    },
    {
      id: 2,
      title: 'VideoForm Analytics Dashboard',
      description: 'Rebuilt the analytics dashboard with TypeScript, reducing runtime errors by 40% and increasing customer acquisition by 50%. Implemented comprehensive test coverage using Jest and introduced user-focused data visualization features.',
      imageUrl: 'https://mybucket4345.s3.us-east-2.amazonaws.com/Screenshot+2025-03-26+114628.png',
      isDeprecated: true,
      technologies: ['TypeScript', 'React', 'Jest', 'Data Visualization','MongoDB','Express.js','Node.js','Redux','chart.js']
    },
    {
      id: 3,
      title: 'GreyMetrics Integration Platform',
      description: 'Developed 25+ integrations for data retrieval and automated reporting in a JavaScript-based web application. Decreased loading time by 80% through application optimization and restructuring, enhancing user experience.',
      imageUrl: 'https://mybucket4345.s3.us-east-2.amazonaws.com/Screenshot+2025-03-26+114851.png',
      websiteurl: 'https://greymetrics.com/',
      technologies: ['Angular','JavaScript', 'Node.js', 'Express.js', 'MongoDB']
    },
    {
      id: 4,
      title: 'Vijaya Diagnostic Website',
      description: 'Led development of a dynamic e-commerce website with an intuitive admin panel for client content management. Implemented responsive design principles and integrated custom payment processing solutions.',
      imageUrl: 'https://mybucket4345.s3.us-east-2.amazonaws.com/Screenshot+2025-03-26+115013.png',
      websiteurl: 'https://www.vijayadiagnostic.com/',
      technologies: ['HTML5/CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'Express.js', 'MongoDB', 'Mongoose', 'Node.js', 'Payment Gateway']
    },
    {
      id: 5,
      title: 'Dubai Driving Center Website',
      description: 'Created a custom 50-page website for driver training courses with responsive design and content management. Implemented multilingual support and course registration functionality to improve user engagement.',
      imageUrl: 'https://mybucket4345.s3.us-east-2.amazonaws.com/Screenshot+2025-03-26+115131.png',
      websiteurl: 'http://dubaidrivingcenter.net/',
      technologies: ['HTML/CSS', 'JavaScript', 'PHP', 'jQuery', 'Content Management']
    }
  ];





  return (
    <div className="bg-custom">
      <Navigation navigation={navigation} />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Personal Projects Section */}
          <div className="bg-custom-back px-6 py-24 lg:px-8 rounded-xl mb-12">
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
              <p className="text-base font-semibold leading-7 text-indigo-600">My Personal Projects</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">
                These are some of the Personal projects I have created.
              </h1>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {personalProjects.map((project, index) => (
                  <div key={project.id} style={{ animationDelay: `${index * 0.15}s` }}>
                    <ProjectCard project={project} setSelectedImage={setSelectedImage} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Company Projects Section */}
          <div className="bg-custom-back px-6 py-24 lg:px-8 rounded-xl">
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
              <p className="text-base font-semibold leading-7 text-indigo-600">Professional Work</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">
                Some of the  Projects which are Live that Ive contributed to professionally in my career in all the companies I have worked.
              </h1>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {companyProjects.map((project, index) => (
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
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
       
        >
          <div className="relative p-4 bg-white rounded-lg shadow-lg max-w-3xl w-full mx-4 animate-fade-in">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 p-2 bg-black/75 rounded-full hover:bg-black/90 transition-colors text-white z-10"
              aria-label="Close image preview"
            >
              {/* <XIcon className="h-6 w-6" /> */}
              X
            </button>
            
            <div className="overflow-hidden rounded-lg">
              <Image 
                src={selectedImage} 
                alt="Project Preview" 
                width={900} 
                height={600} 
                className="rounded-lg object-contain max-h-[80vh]" 
                layout="responsive"
              />
            </div>
            
            <p className="text-sm text-center mt-2 text-gray-600">
              Press ESC or click outside the image to close
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const ProjectCard = ({ project, setSelectedImage }) => {
  // Check if this is a personal project (has redirectURL which only personal projects have)
  const isPersonalProject = !!project.redirectURL;


  
  return (
    <div className="flex flex-col shadow-md rounded-xl p-4 bg-white transform hover:scale-105 transition-transform duration-500 ease-in-out animate-fade-in-top-bottom relative" style={{ backgroundColor: '#BDDFF9', height: 'auto', minHeight: '400px' }}>
     <div className="relative cursor-pointer" onClick={() => setSelectedImage(project.imageUrl)}>
  <Image src={project.imageUrl} alt={project.title} width={400} height={225} className="rounded-t-xl" />
  <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-t-xl">
    <EyeIcon className="h-10 w-10 text-white" />
  </div>
</div>
      <div className="mt-4 flex-grow">
        <h3 className="text-lg font-semibold text-black">{project.title}</h3>
        <p className="text-sm text-gray-600">{project.description}</p>
        
        {project.technologies && (
          <div className="mt-3 flex flex-wrap gap-1">
            {project.technologies.map((tech, index) => (
              <span key={index} className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">
                {tech}
              </span>
            ))}
          </div>
        )}
        
        <div className="mt-3">
          {project.websiteurl && 
            <a href={project.websiteurl} target='_blank' rel='noreferrer' className="text-indigo-600 hover:text-indigo-800 inline-block underline mr-3">
              Visit Website
            </a>
          }
          {project.redirectURL && 
            <a href={project.redirectURL} target='_blank' rel='noreferrer' className="text-indigo-600 hover:text-indigo-800 inline-block underline">
              GitHub Repo
            </a>
          }
        </div>
        
        {isPersonalProject && (
          <div className="mt-2">
            <p className="text-xs text-red-600 font-medium">Important: Please wait for a while while the server starts from cold start. Its on free tier.</p>
          </div>
        )}
        
        {project.isDeprecated && (
          <div className="mt-2">
            <p className="text-xs text-amber-600 font-medium">Note: This project has been deprecated.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
