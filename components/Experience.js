import React, { useState, useEffect, useRef } from 'react';
import { Card } from './Card';
import { Section } from './Section';
import { SimpleLayout } from './SimpleLayout';

function ToolsSection({ pic_src, company_title, width, height, children, ...props }) {
  return (
    <Section {...props}>
      <img
        src={pic_src}
        alt="Company Picture"
        width={width}
        height={height}
        className='rounded-lg'
      />
      <h1 className="text-2xl mt-3 font-semibold tracking-tight text-white mb-5">
        {company_title}
      </h1>
      <ul role="list" className="space-y-6">
        {children}
      </ul>
    </Section>
  );
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
};

export function Experience() {
  const [loaded, setLoaded] = useState(false);
  const sectionsRef = useRef([]);

  useEffect(() => {
    setLoaded(true);

    // Intersection Observer for scrolling animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.style.animationDelay = `${index * 0.3}s`; // Stagger the animations
            entry.target.classList.add('animate-fade-in-top-bottom');
            observer.unobserve(entry.target); // Stop observing once the animation has been triggered
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe each section
    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Cleanup observer on component unmount
    return () => {
      if (sectionsRef.current) {
        sectionsRef.current.forEach((section) => {
          if (section) observer.unobserve(section);
        });
      }
    };
  }, []);

  const videformData = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Express",
    "MongoDB",
    "Amazon S3",
    "Tailwind CSS",
    "Vue.js",
    "Node.js",
    "React.js",
    "Amazon CloudFront",
    "Next.js",
    "Nuxt.js",
    "AWS CloudFront",
    "AWS Lambda",
    "Back-End Web Development"
  ];

  const greyMetricsData = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Angular.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Amazon S3",
  ];

  const aquoDigitalData = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "EJS",
    "Express.js",
    "jQuery",
    "Node.js",
    "MongoDB",
    "Amazon S3",
    "payment gateway",
    "AWS CloudFront",
  ];

  return (
    <SimpleLayout
      title="My Work Experience through the years"
      intro="
      Every project I have worked on has been a learning experience. I have been a part of many projects. Here are some of the stats of my work experience and projects I have worked on. "
    >
      <div className="space-y-20">
        <ToolsSection title="2021 - 2022" pic_src="images/videoform.webp" company_title='VideoForm' width={70} height={50} >
          <h2 className="text-base font-semibold tracking-tight text-white">
            Full stack developer
          </h2>
          <ul className="list-disc text-white pl-5 text-sm">
            <li className="mb-3 " ref={(el) => (sectionsRef.current[0] = el)}>
              Played a key role in planning, developing, and managing a web application from the ground up. Enhanced the application to align with company goals and client feedback.
            </li>
            <li className="mb-3" ref={(el) => (sectionsRef.current[1] = el)}>
              Designed, built, and launched a JavaScript chatbot widget that can be embedded in websites to provide customized video responses to users.
            </li>
            <li className="mb-3" ref={(el) => (sectionsRef.current[2] = el)}>
              Developed and integrated extensions with over 100 CRM platforms.
            </li>
            <li className="mb-3" ref={(el) => (sectionsRef.current[3] = el)}>
              Took ownership of understanding client analytics needs. Built an analytics module for clients to monitor engagement with their feedback forms.
            </li>
            <li className="mb-3" ref={(el) => (sectionsRef.current[4] = el)}>
              Solely responsible for developing an email messaging platform and associated analytics reporting.
            </li>
            <li className="mb-3" ref={(el) => (sectionsRef.current[5] = el)}>
              Streamlined processes for recording, storing, and uploading videos to major platforms.
            </li>
            <li className="mb-3" ref={(el) => (sectionsRef.current[6] = el)}>
              Collaborated on UI wireframes and interfaces to improve user experience.
            </li>
          </ul>
          <span className="isolate flex flex-wrap rounded-md shadow-sm">
            {videformData.map((data, index) => (
              <button
                key={data}
                type="button"
                className="relative m-1 inline-flex items-center rounded-full px-3 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 mr-2"
                style={{ 'color': 'rgb(94 234 212 / 100%)', 'backgroundColor': 'hsla(160, 52%, 71%, .1)' }}
              >
                {data}
              </button>
            ))}
          </span>
        </ToolsSection>
        <ToolsSection title="2019 - 2020" pic_src="images/gm.png" company_title='GreyMetrics' width={200} height={100}>
          <h2 className="text-base font-semibold tracking-tight text-white">
            Front End developer
          </h2>
          <ul className="list-disc text-white pl-5 text-sm">
            <li className="mb-3" ref={(el) => (sectionsRef.current[7] = el)}>
              Developed over 20 social media integrations to enhance platform connectivity and user engagement.
            </li>
            <li className="mb-3" ref={(el) => (sectionsRef.current[8] = el)}>
              In charge of developing and maintaining the company website, ensuring high performance and user-centric design.
            </li>
            <li className="mb-3" ref={(el) => (sectionsRef.current[9] = el)}>
              Involved in creating a report scheduling module that automates and customizes report generation for clients.
            </li>
            <li className="mb-3" ref={(el) => (sectionsRef.current[10] = el)}>
              Created a team member portal to facilitate internal communications and project management.
            </li>
            <li className="mb-3" ref={(el) => (sectionsRef.current[11] = el)}>
              Solely responsible for developing an analytics module, enabling detailed insights into user interactions and behaviors.
            </li>
          </ul>
          <span className="isolate flex flex-wrap rounded-md shadow-sm">
            {greyMetricsData.map((data, index) => (
              <button
                key={data}
                type="button"
                className="relative m-1 inline-flex items-center rounded-full px-3 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 mr-2"
                style={{ 'color': 'rgb(94 234 212 / 100%)', 'backgroundColor': 'hsla(160, 52%, 71%, .1)' }}
              >
                {data}
              </button>
            ))}
          </span>
        </ToolsSection>
        <ToolsSection title="2018 - 2019" pic_src="images/aquodigital.webp" company_title='Aquo Digital' width={80} height={100}>
          <h2 className="text-base font-semibold tracking-tight text-white">
            Front End developer
          </h2>
          <ul className="list-disc text-white pl-5 text-sm">
            <li className="mb-3" ref={(el) => (sectionsRef.current[12] = el)}>
              Developed responsive websites and web applications using HTML, CSS, JavaScript, jQuery, Node.js, and MongoDB.
            </li>
            <li className="mb-3" ref={(el) => (sectionsRef.current[13] = el)}>
              Played a key role in developing, testing, and launching a dynamic e-commerce website <a href="https://www.vijayadiagnostic.com/" className="text-teal-500 hover:underline">Vijaya Diagnostic</a> with an intuitive admin panel for client content management, enabling non-technical users to update images, text, and contacts.
            </li>
            <li className="mb-3" ref={(el) => (sectionsRef.current[14] = el)}>
              Collaborated closely with three clients to understand their vision and incorporate ongoing feedback during the development process to ensure satisfaction.
            </li>
            <li className="mb-3" ref={(el) => (sectionsRef.current[15] = el)}>
              Created a 50-page website for driver training courses <a href="https://www.dubaidrivingcenter.net/" className="text-teal-500 hover:underline">Dubai Driving Center</a> using responsive design.
            </li>
            <li className="mb-3" ref={(el) => (sectionsRef.current[16] = el)}>
              Leveraged MongoDB and AWS S3 to securely store sensitive medical patient data, implementing safety precautions.
            </li>
            <li className="mb-3" ref={(el) => (sectionsRef.current[17] = el)}>
              Embedded a payment gateway for secure financial transactions.
            </li>
          </ul>
          <span className="isolate flex flex-wrap rounded-md shadow-sm">
            {aquoDigitalData.map((data, index) => (
              <button
                key={data}
                type="button"
                className="relative m-1 inline-flex items-center rounded-full px-3 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 mr-2"
                style={{ 'color': 'rgb(94 234 212 / 100%)', 'backgroundColor': 'hsla(160, 52%, 71%, .1)' }}
              >
                {data}
              </button>
            ))}
          </span>
        </ToolsSection>
      </div>
    </SimpleLayout>
  );
}