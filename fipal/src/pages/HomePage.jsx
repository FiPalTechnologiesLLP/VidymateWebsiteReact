import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// --- Local Image Imports ---
import heroBg1 from '../assets/hero-bg.jpg';
import aboutImg from '../assets/about.jpg';
import personaSchool from '../assets/schools.png';
import personaTeacher from '../assets/teacher.png';
import personaStudent from '../assets/student.png';
import personaParent from '../assets/parent.png';


// --- Reusable Counter Component ---
// A simple counter component that animates from 0 to a target number.
const Counter = ({ end, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const frameRate = 1000 / 60; // 60fps
      const totalFrames = Math.round(duration / frameRate);
      let frame = 0;

      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        // Ease-out cubic easing function for a smoother stop
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(end * easedProgress));

        if (frame === totalFrames) {
          clearInterval(counter);
          setCount(end); // Ensure it ends on the exact number
        }
      }, frameRate);

      return () => clearInterval(counter);
    }
  }, [isInView, end]);

  // A helper hook to detect when an element is in view
  function useInView(ref, options) {
    const [isInView, setIsInView] = useState(false);
    useEffect(() => {
      const element = ref.current;
      if (!element) return;

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (options.once) {
            observer.unobserve(element);
          }
        }
      }, options);

      observer.observe(element);

      return () => observer.disconnect();
    }, [ref, options]);
    return isInView;
  }

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};


// --- Animation Variants ---
// Standardized variants for consistent animations across sections.
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

// --- Reusable Section Header ---
const SectionHeader = ({ title, subtitle }) => (
  <motion.div
    className="text-center mb-12 md:mb-16"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }}
  >
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h2>
    {subtitle && <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
  </motion.div>
);


// --- Reusable Card Components ---

const FeatureCard = ({ icon, title, link }) => (
  <motion.div
    variants={itemVariants}
    className="h-full"
  >
    <Link to={link} className="block group h-full">
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl border border-gray-100 h-full transition-all duration-300 transform hover:-translate-y-2">
        <div className="flex items-center space-x-4">
          <i className={`${icon} text-3xl text-cyan-500 group-hover:text-cyan-600 transition-colors`}></i>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
      </div>
    </Link>
  </motion.div>
);

const TestimonialCard = ({ quote, name, title }) => (
  <motion.div
    variants={itemVariants}
    className="bg-white p-8 rounded-xl shadow-lg h-full flex flex-col"
  >
    <div className="flex-grow">
      <p className="text-gray-600 italic">"{quote}"</p>
    </div>
    <div className="mt-6 pt-4 border-t border-gray-200">
      <p className="font-bold text-gray-800">{name}</p>
      <p className="text-sm text-cyan-600 font-medium">{title}</p>
    </div>
  </motion.div>
);

const PersonaCard = ({ title, description, image, bgColor }) => (
    <motion.div
      variants={itemVariants}
      className={`group ${bgColor} rounded-2xl shadow-lg flex flex-row justify-between overflow-hidden h-full p-8`}
    >
      {/* Text Section */}
      <div className="w-3/5">
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
  
      {/* Image Section */}
      <div className="w-2/5 flex items-end -mr-8 -mb-8">
        <img
          src={image}
          alt={title}
          className="max-h-full w-auto object-contain grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
        />
      </div>
    </motion.div>
  );


// --- Main HomePage Component ---

const HomePage = () => {
  // Data for the rotating hero text
  const features = [
    { text: 'simplifying fee management', color: 'text-green-400' },
    { text: 'automating admissions', color: 'text-blue-400' },
    { text: 'streamlining transport', color: 'text-purple-400' },
    { text: 'managing hostels', color: 'text-orange-400' },
    { text: 'empowering teachers', color: 'text-pink-400' },
    { text: 'engaging parents', color: 'text-indigo-400' },
  ];

  const [featureIndex, setFeatureIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFeatureIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  // Data for sections
  const personas = [
    { title: 'Schools', description: 'Automate operations, boost efficiency and reduce overheads with the most powerful school management platform by your side.', image: personaSchool, bgColor: 'bg-yellow-50' },
    { title: 'Teachers', description: 'Create an enriching learning environment through world-class learning content along with digital tools that simplify every classroom operation.', image: personaTeacher, bgColor: 'bg-cyan-50' },
    { title: 'Students', description: 'Never miss a lesson with continuous learning at your fingertips through classroom recordings, unlimited practice questions and much more.', image: personaStudent, bgColor: 'bg-purple-50' },
    { title: 'Parents', description: 'Monitor & track your children\'s progress with complete transparency and stay on top of all the school updates with ease.', image: personaParent, bgColor: 'bg-pink-50' },
  ];

  const coreProducts = [
    { icon: "fa-solid fa-school-flag", title: "School Management", link: "/school-management" },
    { icon: "fa-solid fa-user-check", title: "Admission & Enrollment", link: "/admission-management" },
    { icon: "fa-solid fa-chalkboard-user", title: "Learning Management (LMS)", link: "/learning-management" },
    { icon: "fa-solid fa-bus-simple", title: "Transport Management", link: "/transport-management" },
    { icon: "fa-solid fa-file-invoice-dollar", title: "Fee & Billing Automation", link: "/fee-management" },
    { icon: "fa-solid fa-money-check-dollar", title: "Payroll & HR", link: "/payroll-management" },
  ];

  const whyChooseUsPoints = [
    { icon: <i className="fa-solid fa-layer-group text-2xl text-cyan-600"></i>, title: "All-in-One Platform", text: "Manage everything from a single, intuitive dashboard." },
    { icon: <i className="fa-solid fa-shield-halved text-2xl text-cyan-600"></i>, title: "Data Security First", text: "Protected with enterprise-grade security and encryption." },
    { icon: <i className="fa-solid fa-headset text-2xl text-cyan-600"></i>, title: "24/7 Priority Support", text: "Our dedicated support team is always available to help." },
    { icon: <i className="fa-solid fa-arrows-spin text-2xl text-cyan-600"></i>, title: "Seamless Integration", text: "Integrates effortlessly with your existing tools." },
  ];

  const testimonials = [
    { quote: "Vidyamate has completely transformed our administrative workflow. The efficiency gains in fee management alone are remarkable.", name: "Mrs. Anjali Sharma", title: "Principal, Vidyanikethan School" },
    { quote: "The transport management system is a game-changer. Real-time bus tracking has given our parents immense peace of mind.", name: "Mr. Rajeev Verma", title: "Administrator, PSR English Medium School" },
    { quote: "The LMS is incredibly user-friendly. It has made resource sharing and tracking academic progress seamless and effective.", name: "Dr. Priya Kulkarni", title: "Head of Academics, Vivekananda School" },
  ];

  return (
    <div className="bg-gray-50 overflow-x-hidden"> {/* Added overflow-x-hidden to prevent horizontal scroll during animations */}
      {/* --- HERO SECTION --- */}
      <section
        className="relative flex items-center justify-center h-[85vh] bg-cover bg-center" // Reduced height
        style={{ backgroundImage: `url(${heroBg1})` }}
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>
        <div className="relative text-center px-4 z-10">
          <motion.h1 className="text-4xl md:text-6xl font-extrabold text-white" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            All-in-One School Management
          </motion.h1>
          <motion.div className="mt-4 text-2xl md:text-4xl text-gray-200" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <p>Streamline. Simplify. Succeed by</p>
            <div className="h-12 md:h-16 mt-2">
              <AnimatePresence mode="wait">
                <motion.span key={features[featureIndex].text} className={`font-bold ${features[featureIndex].color}`} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} transition={{ duration: 0.5, ease: 'easeInOut' }}>
                  {features[featureIndex].text}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-8">
            <Link to="/get-started" className="bg-cyan-500 text-white font-bold px-8 py-3 rounded-full hover:bg-cyan-600 transition-colors text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Request a Demo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section className="py-16 lg:py-20"> {/* Reduced padding */}
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}>
              <img src={aboutImg} className="rounded-xl shadow-2xl w-full" alt="Team collaborating" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}>
              <span className="font-semibold text-cyan-600">ABOUT VIDYAMATE</span>
              <h2 className="mt-2 text-3xl font-bold text-gray-800">Engineered for Education, Designed for People</h2>
              <p className="mt-4 text-gray-600">
                At Vidyamate, our mission is to empower educational institutions with technology that is both powerful and intuitive. We handle the complexities of school administration so you can dedicate your resources to fostering student growth and academic excellence.
              </p>
              <ul className="mt-6 space-y-4 text-gray-700">
                <li className="flex items-start"><i className="bi bi-check-circle-fill text-green-500 mr-3 mt-1"></i> <strong>User-Centric Design:</strong> Minimal training required for staff, teachers, and parents.</li>
                <li className="flex items-start"><i className="bi bi-check-circle-fill text-green-500 mr-3 mt-1"></i> <strong>Cloud-Powered & Secure:</strong> Access from anywhere, on any device, with peace of mind.</li>
                <li className="flex items-start"><i className="bi bi-check-circle-fill text-green-500 mr-3 mt-1"></i> <strong>Scalable for Growth:</strong> Our solutions adapt and grow with your institution's needs.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PERSONAS SECTION --- */}
      <section className="py-16 lg:py-20 bg-white"> {/* Reduced padding */}
        <div className="container mx-auto px-6">
          <SectionHeader title={<>Enable better outcomes <br /><span className="text-cyan-600">for everyone</span></>} />
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {personas.map((persona) => <PersonaCard key={persona.title} {...persona} />)}
          </motion.div>
        </div>
      </section>

      {/* --- CORE PRODUCTS SECTION --- */}
      <section className="py-16 lg:py-20"> {/* Reduced padding */}
        <div className="container mx-auto px-6">
          <SectionHeader title="A Complete Ecosystem for Your Institution" subtitle="Explore our integrated suite of modules designed to cover every aspect of school management." />
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {coreProducts.map((product) => <FeatureCard key={product.title} {...product} />)}
          </motion.div>
        </div>
      </section>

      {/* --- WHY CHOOSE US SECTION --- */}
      <section className="py-16 lg:py-20"> {/* Reduced padding */}
        <div className="container mx-auto px-6">
          <div className="bg-cyan-600 rounded-2xl p-8 md:p-12 lg:p-16 text-white grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl font-bold">Why Partner with Vidyamate?</h2>
              <p className="mt-4 opacity-90 text-lg">
                We go beyond software to provide a partnership dedicated to your success. Our platform is built on a foundation of reliability, security, and a deep understanding of the challenges modern schools face.
              </p>
              <Link to="/about" className="mt-8 inline-block bg-white text-cyan-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-all shadow-md">
                Learn More About Us
              </Link>
            </motion.div>
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
              {whyChooseUsPoints.map((point) => (
                <motion.div key={point.title} variants={itemVariants} className="bg-white/10 p-5 rounded-lg">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white mb-4">{point.icon}</div>
                  <h3 className="font-bold text-lg">{point.title}</h3>
                  <p className="text-sm opacity-80 mt-1">{point.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section className="py-16 lg:py-20 bg-white"> {/* Reduced padding */}
        <div className="container mx-auto px-6">
          <SectionHeader title="Trusted by Leading Educational Institutions" subtitle="Hear what our partners have to say about their experience with Vidyamate." />
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {testimonials.map((testimonial) => <TestimonialCard key={testimonial.name} {...testimonial} />)}
          </motion.div>
        </div>
      </section>

      {/* --- COUNTS SECTION --- */}
      <section className="py-16 lg:py-20 bg-gray-800 text-white"> {/* Reduced padding */}
        <div className="container mx-auto px-6">
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
            <motion.div variants={itemVariants}>
              <span className="text-5xl font-bold text-cyan-400"><Counter end={500} suffix="+" /></span>
              <p className="mt-2 font-medium text-gray-300">Partner Schools</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <span className="text-5xl font-bold text-cyan-400"><Counter end={200} suffix="k+" /></span>
              <p className="mt-2 font-medium text-gray-300">Active Users</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <span className="text-5xl font-bold text-cyan-400"><Counter end={99} suffix="%" /></span>
              <p className="mt-2 font-medium text-gray-300">Client Retention</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <span className="text-5xl font-bold text-cyan-400">24/7</span>
              <p className="mt-2 font-medium text-gray-300">Dedicated Support</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white"> {/* Reduced padding */}
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Institution?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
              Join hundreds of schools that have revolutionized their operations with Vidyamate.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/get-started" className="bg-white text-cyan-600 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors text-lg shadow-lg hover:shadow-xl">
                Request a Demo
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-cyan-600 transition-colors text-lg">
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;