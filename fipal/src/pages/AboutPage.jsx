import React from 'react';
import PageTitle from '../components/PageTitle';
// @ts-ignore
import aboutImg2 from '../assets/about-2.jpg';

const AboutPage = () => {
  return (
    <>
      <PageTitle 
        title="About Vidyamate"
        description="We are a team of innovators, educators, and technologists dedicated to shaping the future of education."
        breadcrumbs="About Us"
      />
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-up" className="lg:order-last">
              <img src={aboutImg2} className="rounded-lg shadow-lg w-full" alt="Our Team" />
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
    </>
  );
};

export default AboutPage;