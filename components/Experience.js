import React, { useState, useEffect, useRef } from 'react';
import { Card } from './Card';
import { Section } from './Section';
import { SimpleLayout } from './SimpleLayout';

// Separate component for technology badges
const TechBadge = ({ name }) => (
  <span
    className="relative m-1 inline-flex items-center rounded-full px-3 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 mr-2"
    style={{ color: 'rgb(94 234 212 / 100%)', backgroundColor: 'hsla(160, 52%, 71%, .1)' }}
  >
    {name}
  </span>
);

// Company section with consistent styling
function CompanySection({ pic_src, company_title, width, height, children, ...props }) {
  return (
    <Section {...props}>
      <img
        src={pic_src}
        alt={`${company_title} logo`}
        width={width}
        height={height}
        className='rounded-lg'
        loading="lazy"
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

// Experience data for reusability and easier maintenance
const experienceData = [
  {
    period: "Nov 2024 - Feb 2025",
    company: "Elim5 Inc.",
    role: "Full Stack Developer (Internship)",
    logo: "images/elim5.png",
    logoWidth: 80,
    logoHeight: 50,
    responsibilities: [
      "Led a comprehensive redesign of the company website focusing on WCAG 2.1 compliance (implementing ARIA labels, proper contrast ratios) and improved user experience.",
      "Designed and implemented a seamless integration between Mautic and OpenPhone, amplifying marketing automation capabilities and streamlining post-cold-call contact management.",
      "Architected a full-stack image processing application using Python, Flask, OpenCV, and AWS services, optimizing website performance and security.",
      "Implemented AI-powered chatbot functionality, creating interactive web elements and digital marketing collateral.",
      "Collaborated with marketing teams for digital campaigns, integrating web design with marketing tools and analytics tracking.",
      "Architected a MERN stack image search dashboard leveraging AWS Rekognition, enabling efficient text-based search across 500+ images.",
      "Redesigned UI and user experience for ADP's Internal Demo Tool, creating a more intuitive and user-friendly interface"
    ],
    technologies: [
      "HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "Python", 
      "Flask", "MongoDB", "AWS", "OpenCV", "WCAG Compliance", "Tailwind CSS",
      "RESTful API", "Git", "Figma"
    ]
  },
  {
    period: "May 2021 - Dec 2022",
    company: "VideoForm",
    role: "Full Stack Developer",
    logo: "images/videoform.webp",
    logoWidth: 70,
    logoHeight: 50,
    responsibilities: [
      "Played a key role in planning, developing, and managing a web application from the ground up. Enhanced the application to align with company goals and client feedback.",
      "Designed, built, and launched a JavaScript chatbot widget that can be embedded in websites to provide customized video responses to users.",
      "Developed and integrated extensions with over 100 CRM platforms.",
      "Took ownership of understanding client analytics needs. Built an analytics module for clients to monitor engagement with their feedback forms.",
      "Solely responsible for developing an email messaging platform and associated analytics reporting.",
      "Streamlined processes for recording, storing, and uploading videos to major platforms.",
      "Collaborated on UI wireframes and interfaces to improve user experience."
    ],
    technologies: [
      "HTML5", "CSS3", "JavaScript", "Express", "MongoDB", "Amazon S3", 
      "Tailwind CSS", "Vue.js", "Node.js", "React.js", "Next.js", "Nuxt.js", 
      "AWS CloudFront", "AWS Lambda", "Back-End Web Development"
    ]
  },
  {
    period: "Jan 2019 - Dec 2020",
    company: "GreyMetrics",
    role: "Front End Developer",
    logo: "images/gm.png",
    logoWidth: 200,
    logoHeight: 100,
    responsibilities: [
      "Developed over 20 social media integrations to enhance platform connectivity and user engagement.",
      "In charge of developing and maintaining the company website, ensuring high performance and user-centric design.",
      "Involved in creating a report scheduling module that automates and customizes report generation for clients.",
      "Created a team member portal to facilitate internal communications and project management.",
      "Solely responsible for developing an analytics module, enabling detailed insights into user interactions and behaviors."
    ],
    technologies: [
      "HTML5", "CSS3", "JavaScript", "Angular.js", "Node.js", "Express", "MongoDB", "Amazon S3"
    ]
  },
  {
    period: "Aug 2018 - Jan 2019",
    company: "Aquo Digital",
    role: "Front End Developer",
    logo: "images/aquodigital.webp",
    logoWidth: 80,
    logoHeight: 100,
    responsibilities: [
      "Developed responsive websites and web applications using HTML, CSS, JavaScript, jQuery, Node.js, and MongoDB.",
      <>Played a key role in developing, testing, and launching a dynamic e-commerce website <a href="https://www.vijayadiagnostic.com/" className="text-teal-500 hover:underline">Vijaya Diagnostic</a> with an intuitive admin panel for client content management, enabling non-technical users to update images, text, and contacts.</>,
      "Collaborated closely with three clients to understand their vision and incorporate ongoing feedback during the development process to ensure satisfaction.",
      <>Created a 50-page website for driver training courses <a href="http://dubaidrivingcenter.net/" className="text-teal-500 hover:underline">Dubai Driving Center</a> using responsive design.</>,
      "Leveraged MongoDB and AWS S3 to securely store sensitive medical patient data, implementing safety precautions.",
      "Embedded a payment gateway for secure financial transactions."
    ],
    technologies: [
      "HTML5/CSS3", "JavaScript", "EJS", "Express.js", "jQuery", "Node.js", 
      "MongoDB", "Amazon S3", "Payment Gateway", "AWS CloudFront"
    ]
  }
];

export const metadata = {
  title: 'Experience',
  description: 'My professional journey and experience as a developer.',
};

export function Experience() {
  const [loaded, setLoaded] = useState(false);
  const sectionsRef = useRef([]);

  useEffect(() => {
    setLoaded(true);


  }, []);

  return (
    <SimpleLayout
      title="My Work Experience through the years"
      intro="Every project I've worked on has been a learning experience. Here are some highlights from my professional journey and the technologies I've used along the way."
    >
      <div className="space-y-20">
        {experienceData.map((experience, expIndex) => (
          <CompanySection 
            key={experience.company}
            title={experience.period} 
            pic_src={experience.logo} 
            company_title={experience.company} 
            width={experience.logoWidth} 
            height={experience.logoHeight}
          >
            <h2 className="text-base font-semibold tracking-tight text-white">
              {experience.role}
            </h2>
            <ul className="list-disc text-white pl-5 text-sm">
              {experience.responsibilities.map((responsibility, respIndex) => (
                <li 
                  key={respIndex}
                  className="mb-3" 
                  ref={el => {
                    const index = expIndex * 10 + respIndex;
                    if (el) sectionsRef.current[index] = el;
                  }}
                >
                  {responsibility}
                </li>
              ))}
            </ul>
            <div className="isolate flex flex-wrap rounded-md shadow-sm">
              {experience.technologies.map(tech => (
                <TechBadge key={`${experience.company}-${tech}`} name={tech} />
              ))}
            </div>
          </CompanySection>
        ))}
      </div>
    </SimpleLayout>
  );
}