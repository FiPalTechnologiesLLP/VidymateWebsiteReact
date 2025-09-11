import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // EffectFade is removed

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Removed the fade effect CSS as it's no longer needed

import Counter from '../components/Counter';

// Import images
import heroBg1 from '../assets/hero-bg.jpg';
import heroBg2 from '../assets/hero-bg-2.jpg';
import heroBg3 from '../assets/hero-bg-3.jpg';
import aboutImg from '../assets/about.jpg';

// Reusable card components with animations
const FeatureCard = ({ icon, title, link }) => (
  <motion.div
    className="relative group p-4 h-full"
    whileHover={{ y: -10, scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="flex items-center bg-white shadow-md rounded-lg p-6 h-full">
      <i className={`${icon} text-3xl text-cyan-500 mx-3`}></i>
      <h3 className="text-lg font-semibold text-gray-800">
        <Link to={link} className="focus:outline-none">
          <span className="absolute inset-0" aria-hidden="true"></span>
          {title}
        </Link>
      </h3>
    </div>
  </motion.div>
);

const InfoCard = ({ icon, title, children }) => (
  <motion.div 
    className="bg-white p-6 rounded-lg shadow-md border border-gray-200 h-full"
    whileHover={{ y: -5, scale: 1.03 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-cyan-50 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </motion.div>
);

const TestimonialCard = ({ quote, name, school }) => (
    <motion.div 
        className="bg-white p-8 rounded-lg shadow-lg h-full" 
        whileHover={{ y: -10, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
    >
        <p className="text-gray-600 italic">"{quote}"</p>
        <div className="mt-4">
            <p className="font-bold text-gray-800">{name}</p>
            <p className="text-sm text-cyan-600">{school}</p>
        </div>
    </motion.div>
);

const HomePage = () => {
  // Animation variants for staggering children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  // Data for the hero slider
  const slides = [
    {
      image: heroBg1,
      title: "Empowering Education, One Click at a Time",
      subtitle: "Integrated software solutions designed to streamline school administration and enhance learning."
    },
    {
      image: heroBg2,
      title: "Seamless Admission & Enrollment",
      subtitle: "Digitize your entire admissions workflow, from online applications to final enrollment, effortlessly."
    },
    {
      image: heroBg3,
      title: "A Connected Learning Community",
      subtitle: "Bridge the gap between teachers, students, and parents with our integrated communication and learning platform."
    }
  ];

  return (
    <>
      {/* Hero Slider Section */}
      <section className="relative h-[80vh] w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]} // EffectFade module removed
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          // The effect="fade" prop has been removed to get the default slide effect
          className="h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="relative h-full w-full">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="relative h-full flex items-center justify-center text-center text-white z-10">
                  <div className="container mx-auto px-4">
                    <motion.h2 
                        key={slide.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-6xl font-bold"
                    >
                      {slide.title}
                    </motion.h2>
                    <motion.p 
                        key={slide.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-4 text-lg max-w-3xl mx-auto"
                    >
                      {slide.subtitle}
                    </motion.p>
                    <motion.div 
                        key={`button-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-8"
                    >
                      <Link to="/get-started" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors text-lg">
                        Get Started
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
                <li className="flex items-start"><i className="bi bi-check-circle text-cyan-500 mr-3 mt-1"></i> <span>Scalable solutions that grow with your institution.</span></li>
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
                  Our platform is engineered to address the core challenges of modern educational institutions, providing a seamless, integrated experience that drives efficiency and fosters a collaborative community.
                </p>
              </div>
              <div className="mt-6">
                <Link to="/about" className="bg-white text-cyan-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div variants={itemVariants}><InfoCard icon={<i className="fa-solid fa-layer-group text-2xl text-cyan-500"></i>} title="Unified Platform">Manage all tasks from a single, intuitive dashboard.</InfoCard></motion.div>
              <motion.div variants={itemVariants}><InfoCard icon={<i className="fa-solid fa-shield-halved text-2xl text-cyan-500"></i>} title="Secure & Reliable">Your data is protected with industry-leading security.</InfoCard></motion.div>
              <motion.div variants={itemVariants}><InfoCard icon={<i className="fa-solid fa-headset text-2xl text-cyan-500"></i>} title="Dedicated Support">Our expert team is available 24/7 to assist you.</InfoCard></motion.div>
              <motion.div variants={itemVariants}><InfoCard icon={<i className="fa-solid fa-mobile-screen-button text-2xl text-cyan-500"></i>} title="Mobile Friendly">Access key features on the go with our responsive interface.</InfoCard></motion.div>
            </motion.div>
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
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div variants={itemVariants}>
                  <TestimonialCard 
                      quote="Vidyamate has transformed our administrative process. The fee and admission management modules are incredibly efficient and have saved our staff countless hours."
                      name="Principal"
                      school="Vidyanikethan School"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <TestimonialCard 
                      quote="The transport management system is a game-changer for student safety. Parents have peace of mind with real-time tracking, and our routes are now more optimized than ever."
                      name="Administrator"
                      school="PSR English Medium School"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <TestimonialCard 
                      quote="As a teacher, the Learning Management System has been invaluable. Sharing resources and tracking student progress is simple and intuitive. It's a fantastic tool for modern education."
                      name="Head of Academics"
                      school="Vivekananda School"
                  />
                </motion.div>
            </motion.div>
        </div>
      </section>

      {/* Core Products Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">Our Core Products</h2>
            <p className="mt-4 text-lg text-gray-600">A complete ecosystem for your educational institution.</p>
          </div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants}><FeatureCard icon="fa-solid fa-school" title="School Management System" link="/school-management" /></motion.div>
            <motion.div variants={itemVariants}><FeatureCard icon="fa-solid fa-user-plus" title="Admission Management System" link="/admission-management" /></motion.div>
            <motion.div variants={itemVariants}><FeatureCard icon="fa-solid fa-book-open-reader" title="Learning Management System" link="/learning-management" /></motion.div>
            <motion.div variants={itemVariants}><FeatureCard icon="fa-solid fa-bus" title="Transport Management System" link="/transport-management" /></motion.div>
            <motion.div variants={itemVariants}><FeatureCard icon="fa-solid fa-receipt" title="Fees Management System" link="/fee-management" /></motion.div>
            <motion.div variants={itemVariants}><FeatureCard icon="fa-solid fa-file-invoice-dollar" title="Payroll Management System" link="/payroll-management" /></motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;

