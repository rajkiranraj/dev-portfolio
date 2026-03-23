import React from 'react';
import StickyCard002 from '../components/StickyCard002';

const Certificates = () => {
  const certificateCards = [
    {
      id: 1,
      image: "/images/certificates/img19.png",
      alt: "HackerRank Problem Solving Certificate",
      link: "https://www.hackerrank.com/certificates/0fe1693b405a",
    },
    {
      id: 2,
      image: "/images/certificates/img20.jpg",
      alt: "HackerRank Python Certificate",
      link: "https://www.hackerrank.com/certificates/6999a0eef1e5",
    },
    {
      id: 3,
      image: "/images/certificates/img21.jpg",
      alt: "HackerRank Certificate",
      link: "https://www.hackerrank.com/certificates/87068f559ffb",
    },
    {
      id: 4,
      image: "/images/certificates/img22.png",
      alt: "FreeCodeCamp Responsive Web Design",
      link: "https://www.freecodecamp.org/certification/rudrarajkiran/responsive-web-design",
    },
    {
      id: 5,
      image: "/images/certificates/img23.png",
      alt: "Certificate",
      link: "https://drive.google.com/file/d/1FsChAFW0_xD9z2wQLvOsV5vdVa-JGzac/view",
    },
  ];

  return (
    <section id="certificates" className="w-full relative z-10 py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-4 md:px-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-2 text-center uppercase tracking-widest">
          Certificates
        </h2>
        <p className="text-white/50 text-center tracking-widest uppercase text-sm md:text-base mb-10">
          Professional Certifications and Courses
        </p>
      </div>
      <StickyCard002 cards={certificateCards} />
    </section>
  );
};

export default Certificates;
