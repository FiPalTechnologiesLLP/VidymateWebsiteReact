import React from 'react';
import { Link } from 'react-router-dom';
import Counter from '../components/Counter';
import heroBg from '../assets/hero-bg.jpg';
import aboutImg from '../assets/about.jpg';

const FeatureCard = ({ icon, title, link, delay }) => (
  <div className="relative group p-4" data-aos="fade-up" data-aos-delay={delay}>
    <div className="flex items-center bg-white shadow-md rounded-lg p-6 transition-all duration-300 group-hover:shadow-xl">
      <i className={`${icon} text-3xl text-cyan-500 mx-3`}></i>
      <h3 className="text-lg font-semibold text-gray-800">
        <Link to={link} className="focus:outline-none">
          <span className="absolute inset-0" aria-hidden="true"></span>
          {title}
        </Link>
      </h3>
    </div>
  </div>
);

// Component for the "Why Choose Us" info cards
const InfoCard = ({ icon, title, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200" data-aos="fade-up" data-aos-delay="200">
    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-cyan-50 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </div>
);

// Component for the Testimonial cards
const TestimonialCard = ({ quote, name, school }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg" data-aos="fade-up">
        <p className="text-gray-600 italic">"{quote}"</p>
        <div className="mt-4">
            <p className="font-bold text-gray-800">{name}</p>
            <p className="text-sm text-cyan-600">{school}</p>
        </div>
    </div>
);


const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative h-[80vh] flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="relative container mx-auto px-4 text-center z-10">
          <h2 data-aos="fade-up" className="text-5xl md:text-6xl font-bold">Empowering Education, One Click at a Time</h2>
          <p data-aos="fade-up" data-aos-delay="100" className="mt-4 text-lg">Integrated software solutions designed to streamline school administration and enhance learning.</p>
          <div data-aos="fade-up" data-aos-delay="200" className="mt-8">
            <Link to="/get-started" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors text-lg">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-up">
              <img src={aboutImg} className="rounded-lg shadow-lg w-full" alt="Educators collaborating" />
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-3xl font-bold text-gray-800">Designed for Growth, Built for Educators</h3>
              <p className="mt-4 italic text-gray-600">
                At Vidyamate, we believe technology should simplify complexity. Our suite of tools is crafted to handle the administrative burdens of modern education, freeing up educators to focus on what matters most: student success.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start"><i className="bi bi-check-circle text-cyan-500 mr-3 mt-1"></i> <span>Intuitive interfaces that require minimal training.</span></li>
                <li className="flex items-start"><i className="bi bi-check-circle text-cyan-500 mr-3 mt-1"></i> <span>Secure, cloud-based access from anywhere, on any device.</span></li>
                <li className="flex items-start"><i className="bi bi-check-circle text-cyan-500 mr-3 mt-1"></i> <span>Scalable solutions that grow with your institution, from small schools to large districts.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Counts Section */}
      <section className="py-16 lg:py-24 bg-cyan-50 text-cyan-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <span className="text-5xl font-bold text-cyan-600"><Counter end={500} />+</span>
              <p className="mt-2 font-medium">Partner Schools</p>
            </div>
            <div>
              <span className="text-5xl font-bold text-cyan-600"><Counter end={200} suffix="k" /></span>
              <p className="mt-2 font-medium">Active Students</p>
            </div>
            <div>
              <span className="text-5xl font-bold text-cyan-600"><Counter end={99} suffix="%" /></span>
              <p className="mt-2 font-medium">Client Satisfaction</p>
            </div>
            <div>
              <span className="text-5xl font-bold text-cyan-600">24/7</span>
              <p className="mt-2 font-medium">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-cyan-500 text-white p-8 rounded-lg flex flex-col justify-between" data-aos="fade-up">
              <div>
                <h3 className="text-3xl font-bold">Why Choose Our Products?</h3>
                <p className="mt-4 opacity-90">
                  Our platform is engineered to address the core challenges of modern educational institutions. We provide a seamless, integrated experience that connects administration, faculty, students, and parents, driving efficiency and fostering a collaborative community.
                </p>
              </div>
              <div className="mt-6">
                <Link to="/about" className="bg-white text-cyan-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InfoCard icon={<i className="fa-solid fa-layer-group text-2xl text-cyan-500"></i>} title="Unified Platform">
                Manage all academic and administrative tasks from a single, intuitive dashboard.
              </InfoCard>
              <InfoCard icon={<i className="fa-solid fa-shield-halved text-2xl text-cyan-500"></i>} title="Secure & Reliable">
                Your data is protected with industry-leading security and cloud infrastructure.
              </InfoCard>
              <InfoCard icon={<i className="fa-solid fa-headset text-2xl text-cyan-500"></i>} title="Dedicated Support">
                Our expert team is available 24/7 to assist you with any questions or needs.
              </InfoCard>
               <InfoCard icon={<i className="fa-solid fa-mobile-screen-button text-2xl text-cyan-500"></i>} title="Mobile Friendly">
                Access key features on the go with our fully responsive mobile-ready interface.
              </InfoCard>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-cyan-50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800">Trusted by Leading Institutions</h2>
                <p className="mt-4 text-lg text-gray-600">Hear what our partners have to say about Vidyamate.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <TestimonialCard 
                    quote="Vidyamate has transformed our administrative process. The fee and admission management modules are incredibly efficient and have saved our staff countless hours."
                    name="Principal"
                    school="Vidyanikethan School"
                />
                <TestimonialCard 
                    quote="The transport management system is a game-changer for student safety. Parents have peace of mind with real-time tracking, and our routes are now more optimized than ever."
                    name="Administrator"
                    school="PSR English Medium School"
                />
                <TestimonialCard 
                    quote="As a teacher, the Learning Management System has been invaluable. Sharing resources and tracking student progress is simple and intuitive. It's a fantastic tool for modern education."
                    name="Head of Academics"
                    school="Vivekananda School"
                />
            </div>
        </div>
      </section>

      {/* Core Products Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">Our Core Products</h2>
            <p className="mt-4 text-lg text-gray-600">A complete ecosystem for your educational institution.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard icon="fa-solid fa-school" title="School Management System" link="/school-management" delay="100" />
            <FeatureCard icon="fa-solid fa-user-plus" title="Admission Management System" link="/admission-management" delay="200" />
            <FeatureCard icon="fa-solid fa-book-open-reader" title="Learning Management System" link="/learning-management" delay="300" />
            <FeatureCard icon="fa-solid fa-bus" title="Transport Management System" link="/transport-management" delay="400" />
            <FeatureCard icon="fa-solid fa-receipt" title="Fees Management System" link="/fee-management" delay="500" />
            <FeatureCard icon="fa-solid fa-file-invoice-dollar" title="Payroll Management System" link="/payroll-management" delay="600" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;

