import React from 'react';
import TiltedCard from '../components/TiltedCard';

const Achievements = () => {
  return (
    <section id="achievements" className="w-full relative z-10 py-32 bg-zinc-950 overflow-hidden">
      <div className="container mx-auto px-4 md:px-10 max-w-6xl">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-2 text-center uppercase tracking-widest">
          Achievements
        </h2>
        <p className="text-white/50 text-center tracking-widest uppercase text-sm md:text-base mb-24">
          Milestones and Recognitions
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-12">
          {/* LeetCode Card */}
          <a
            href="https://leetcode.com/u/rajkiranraj/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-8 group cursor-pointer"
          >
            <div className="achievement-card-glow relative rounded-[20px] p-[1px]">
              <div className="rounded-[20px] overflow-hidden">
                <TiltedCard
                  imageSrc="/images/acheivements/img1.png"
                  altText="LeetCode Rating"
                  captionText="LeetCode Contest Rating 1612"
                  containerHeight="500px"   /* 👈 Change card container height here */
                  containerWidth="480px"    /* 👈 Change card container width here */
                  imageHeight="500px"       /* 👈 Change image height here */
                  imageWidth="480px"        /* 👈 Change image width here */
                  rotateAmplitude={12}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={false}
                />
              </div>
            </div>
            <div className="text-center max-w-xs">
              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#ffa116] transition-colors">LeetCode</h3>
              <p className="text-xl font-bold text-[#ffa116] mb-3">Contest Rating 1612</p>
              <p className="text-white/70 text-sm leading-relaxed font-light">
                Ranking in the top 21.48% globally and demonstrating strong DSA skills.
              </p>
            </div>
          </a>
          
          {/* HackerRank Card */}
          <a
            href="https://www.hackerrank.com/profile/rajkiranraj0000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-8 group cursor-pointer"
          >
            <div className="achievement-card-glow relative rounded-[20px] p-[1px]">
              <div className="rounded-[20px] overflow-hidden">
                <TiltedCard
                  imageSrc="/images/acheivements/img2.png"
                  altText="HackerRank Python Badge"
                  captionText="HackerRank 5-Star Python"
                  containerHeight="500px"   /* 👈 Change card container height here */
                  containerWidth="480px"    /* 👈 Change card container width here */
                  imageHeight="500px"       /* 👈 Change image height here */
                  imageWidth="480px"        /* 👈 Change image width here */
                  rotateAmplitude={12}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={false}
                />
              </div>
            </div>
            <div className="text-center max-w-xs">
              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#00ea64] transition-colors">HackerRank</h3>
              <p className="text-xl font-bold text-[#00ea64] mb-3">5-Star Python Badge</p>
              <p className="text-white/70 text-sm leading-relaxed font-light">
                Demonstrated strong problem-solving and Python proficiency.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
