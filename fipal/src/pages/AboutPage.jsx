import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageTitle from '../components/PageTitle';

// Import images
import aboutImg2 from '../assets/about-2.jpg';
import javeedImg from '../assets/team/javeed.jpeg';
import sreenathImg from '../assets/team/sreenath.jpeg';
import mithunImg from '../assets/team/mithun.jpeg';
import pavanImg from '../assets/team/pavan.jpeg';
import viswanathImg from '../assets/team/viswanath.jpeg';

// A reusable component for team member cards with the corrected flip animation
const TeamMemberCard = ({ image, name, title, quote }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative w-full h-72 rounded-lg" // Set a fixed height for the card container
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
      style={{ perspective: 1000 }} // Apply perspective to the container for 3D effect
    >
      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 rounded-lg shadow-lg"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* --- Card Front --- */}
        <div className="absolute w-full h-full [backface-visibility:hidden] bg-white rounded-lg overflow-hidden">
          <img 
            src={image} 
            className="w-full h-2/3 object-cover" // Adjusted image height
            alt={`Photo of ${name}`} 
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-cyan-500 text-white p-3 flex flex-col justify-center items-center text-center">
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="text-sm opacity-90">{title}</p>
          </div>
        </div>

        {/* --- Card Back --- */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-cyan-600 rounded-lg shadow-lg flex items-center justify-center p-4">
          <div className="text-center text-white">
            <p className="italic text-base">"{quote}"</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};


const AboutPage = () => {
  return (
    <>
      <PageTitle 
        title="About Vidyamate"
        description="We are a team of innovators, educators, and technologists dedicated to shaping the future of education."
        breadcrumbs="About Us"
      />
      
      {/* Mission Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-up" className="lg:order-last">
              <img src={aboutImg2} className="rounded-lg shadow-lg w-full" alt="Our Team collaborating" />
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-3xl font-bold text-gray-800">Our Mission: To Simplify and Inspire</h3>
              <p className="mt-4 italic text-gray-600">
                Vidyamate was founded on a simple principle: technology should empower, not complicate. We saw educators and administrators bogged down by repetitive tasks and disconnected systems, and we knew there was a better way.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start"><i className="bi bi-check-circle text-cyan-500 mr-3 mt-1"></i> <span>We build user-friendly software that solves real-world challenges in education.</span></li>
                <li className="flex items-start"><i className="bi bi-check-circle text-cyan-500 mr-3 mt-1"></i> <span>We foster collaboration between schools and families through transparent communication tools.</span></li>
                <li className="flex items-start"><i className="bi bi-check-circle text-cyan-500 mr-3 mt-1"></i> <span>We are committed to continuous innovation, ensuring our partners always have access to the best technology.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 lg:py-24 bg-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800" data-aos="fade-up">Our Team</h2>
            <p className="mt-4 text-lg text-gray-600" data-aos="fade-up" data-aos-delay="100">The dedicated professionals behind Vidyamate's success.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <TeamMemberCard 
              image={javeedImg} 
              name="Md Javeed" 
              title="CEO & Founder"
              quote="Innovation in education is not about replacing teachers, but empowering them with the right tools."
            />
            <TeamMemberCard 
              image={sreenathImg} 
              name="Uppara Sreenath" 
              title="Project Manager"
              quote="A great project is built on clear communication and a shared vision. We deliver both."
            />
            <TeamMemberCard 
              image={mithunImg} 
              name="Mithun Reddy" 
              title="QA Director"
              quote="Quality is not an act, it is a habit. We ensure excellence in every line of code."
            />
            <TeamMemberCard 
              image={pavanImg} 
              name="Uppara Pavan" 
              title="Developer"
              quote="The future is written in code. I'm just glad to be holding the pen."
            />
            <TeamMemberCard 
              image={viswanathImg} 
              name="Viswanath Reddy" 
              title="CTO & Co-Founder"
              quote="Technology's true purpose is to create simplicity from complexity. That's our core mission."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;