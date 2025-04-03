import React, { useState, useEffect, useRef } from 'react';
import Navigation from '../components/Navigation';
import Image from 'next/image';
import { InformationCircleIcon } from '@heroicons/react/20/solid';

const AboutUs = () => {
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
    // sectionsRef.current.forEach((section) => {
    //   if (section) observer.observe(section);
    // });

    // Cleanup observer on component unmount
    return () => {
      if (sectionsRef.current) {
        sectionsRef.current.forEach((section) => {
          if (section) observer.unobserve(section);
        });
      }
    };
  }, []);

  const navigation = [
    { name: 'Work', href: '/', current: false },
    { name: 'About', href: '/aboutus', current: true },
    { name: 'projects', href: '/projects', current: false },
    { name: 'Contact', href: '#', current: false },
  ];

  return (
    <div className="bg-custom">
      <Navigation navigation={navigation} />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div>
            <div className="bg-custom-back px-6 py-32 lg:px-8 sm-rounded-6xl lg-rounded-8xl">
              <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                {/* Applying animation to the existing elements */}
                <p ref={(el) => (sectionsRef.current[0] = el)} className="text-base font-semibold leading-7 text-indigo-600">
                  About Me
                </p>
                <h1 ref={(el) => (sectionsRef.current[1] = el)} className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  My Journey to become a Full Stack Developer :
                </h1>
                <p ref={(el) => (sectionsRef.current[2] = el)} className="mt-8">
  I&apos;m originally from Hyderabad, India, but I currently live in Canada. I finished my Computer Science degree back in 2018, and recently completed my Post-Graduate Diploma in Web Development with Distinction (3.9 GPA). During my final year in college, I really wanted to follow my passion for becoming a UI developer, so I joined a startup called Aquo Digital, which was into growth hacking and digital marketing.
</p>
                <div ref={(el) => (sectionsRef.current[3] = el)} className="mt-7 max-w-2xl">
                  <p>
                    Later on, with the same group of people, we started a SAAS company called <a href='https://greymetrics.com/' className='hover:text-blue-500 underline' target='_blank' rel='noreferrer'>GreyMetrics</a>. We eventually sold that company and then jumped into a new venture called <a href='https://www.videoform.com/' className='hover:text-blue-500 underline' target='_blank' rel='noreferrer'>VideoForm</a>. We managed to raise an initial seed fund of 100k for it.
                  </p>
                  <p className="mt-8">
                    I&apos;ve been working with this awesome group for almost 4 years. It all began as an intern, and then I moved to working full time, learning and figuring out how to grow the company one day at a time. Working in a startup means dedicating your time to building and trying to make the product better every day.
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
                      Team that I worked with (2018 - 2022)
                    </figcaption>
                  </figure>
                  <h2 ref={(el) => (sectionsRef.current[4] = el)} className="mt-16 text-2xl font-bold tracking-tight text-gray-900">As a developer</h2>
                  <p ref={(el) => (sectionsRef.current[5] = el)} className="mt-6">
                    I pay close attention to my code’s readability. Sure, I’ll put together something as quickly as possible to make it work, but after that I’ll spend a good amount of time commenting and organizing everything. I want you to feel welcome around my code.
                  </p>
                  <p ref={(el) => (sectionsRef.current[6] = el)} className="mt-8">
                    Clean, consistent, readable and maintainable code. It’s great when features work, but it’s even greater whenever they can stay that way, regardless of who’s working on them.
                  </p>
                  <p ref={(el) => (sectionsRef.current[7] = el)} className="mt-8">
                    I’m excited to work on new projects, because I learn something new every time. I’m excited for the next challenge.
                  </p>
                </div>
                <div ref={(el) => (sectionsRef.current[8] = el)} className="mt-16 max-w-2xl">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">As a person</h2>
                  <p className="mt-6">
                    If I had to describe myself in one word, it would be <b>resourceful</b>. I’ll take a problem, break it into smaller bits and try to find a solution. Creativity has helped me sail around tough obstacles.
                    <br />
                    <b>I’m curious by nature and I love learning</b>. I’ve amassed a wide range of skills and interests that when put together, end up feeding my career in one way or another.
                  </p>
                </div>
                <div ref={(el) => (sectionsRef.current[9] = el)} className="mt-16 max-w-2xl">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">As a colleague</h2>
                  <p className="mt-6">
                    My favourite part of being a software developer is trying to build something with a talented bunch of people who have different experiences and various thought processes. That’s why I worked with the same bunch of people for 4 years and was part of 3 different startups.
                  </p>
                  <p className="mt-6">
                    I&apos;m a team player. With my background in engineering and art, I feel comfortable interacting with both the technically oriented people of the team as well as the artistically oriented ones.
                  </p>
                  <p className="mt-6">
                    I feel like having good communication skills are as important as having any core technical skills. I was in a startup environment where I had to wear multiple hats, work with different teams, and communicate with different stakeholders.
                  </p>
                  <p className="mt-6">
                    My experience working for a small startup gave me exposure to how to build a product from an idea to an executable product. You constantly improve and understand your user base, making changes accordingly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
