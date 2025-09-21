import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// --- Local Image Imports ---
import aboutImg from '../assets/about.jpg';
import personaSchool from '../assets/schools.png';
import personaTeacher from '../assets/teacher.png';
import personaStudent from '../assets/student.png';
import personaParent from '../assets/parent.png';


// --- START: Thematic Icon Components ---
// These are the stylized SVG icons for the background animation.

const BookIcon = ({ color }) => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20v3H6.5A2.5 2.5 0 0 1 4 17.5v-11A2.5 2.5 0 0 1 6.5 4H20v13H6.5a2.5 2.5 0 0 1 0-5H20V7H6.5A2.5 2.5 0 0 1 4 9.5v10Z" stroke={color} strokeWidth="1.5"/>
  </svg>
);

const GradCapIcon = ({ color }) => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 9L12 14L2 9L12 4L22 9ZM12 14V21M19 12.5L12 16L5 12.5M3 10C3 10 3 13.5 3 13.5C3 13.5 12 18.5 12 18.5C12 18.5 21 13.5 21 13.5C21 13.5 21 10 21 10" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AtomIcon = ({ color }) => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke={color} strokeWidth="1.5" strokeOpacity="0.5"/>
    <path d="M18.364 5.63605C15.6863 2.95837 10.6637 2.45837 7.22183 4.77817C3.77998 7.09798 2.31371 11.5307 4.03022 15.4693C5.74674 19.408 9.91829 21.6863 14.1421 20.9698C18.366 20.2533 21.0437 16.3137 20.3272 12.3751" stroke={color} strokeWidth="1.5"/>
    <path d="M12 12.5C12.2761 12.5 12.5 12.2761 12.5 12C12.5 11.7239 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.7239 11.5 12C11.5 12.2761 11.7239 12.5 12 12.5Z" fill={color} stroke={color}/>
  </svg>
);

const BusIcon = ({ color }) => (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12V19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19V12Z" stroke={color} strokeWidth="1.5"/>
        <path d="M19 11V7.5C19 6.02444 18.0242 5.23537 16.7027 4.54225L13.7027 2.96139C12.6373 2.40113 11.3627 2.40113 10.2973 2.96139L7.2973 4.54225C5.97581 5.23537 5 6.02444 5 7.5V11" stroke={color} strokeWidth="1.5"/>
        <circle cx="7" cy="19.5" r="1.5" stroke={color} strokeWidth="1.5"/>
        <circle cx="17" cy="19.5" r="1.5" stroke={color} strokeWidth="1.5"/>
        <path d="M3 15.5H21" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const ChildrenIcon = ({ color }) => (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="3" stroke={color} strokeWidth="1.5"/>
        <path d="M11 14H5C3.89543 14 3 14.8954 3 16V21H13V16C13 14.8954 12.1046 14 11 14Z" stroke={color} strokeWidth="1.5"/>
        <circle cx="16" cy="6" r="3" stroke={color} strokeWidth="1.5"/>
        <path d="M19 12H13C11.8954 12 11 12.8954 11 14V17" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);

const GlobeIcon = ({ color }) => (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5"/>
        <path d="M12 22C14.6667 18 16 14 16 12C16 10 14.6667 6 12 2" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 22C9.33333 18 8 14 8 12C8 10 9.33333 6 12 2" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M2.5 9H21.5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M2.5 15H21.5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);

const DnaIcon = ({ color }) => (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4C12 4 12 20 20 20" stroke={color} strokeWidth="1.5"/>
        <path d="M20 4C12 4 12 20 4 20" stroke={color} strokeWidth="1.5"/>
        <path d="M6.85714 8H17.1429" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M6.85714 16H17.1429" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 12H12.01" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);
// --- END: Icon Components ---


// --- Abstract Animated Hero Background (UPDATED with faster, more random motion) ---
const AbstractHeroBackground = () => {
  const elements = [
    // Faster durations & more varied start/end points for a dynamic, spread-out effect
    { id: 'c1', type: 'circle', color: 'rgba(255, 255, 255, 0.05)', size: 150, initial: { x: '-10vw', y: '20vh' }, animate: { x: '110vw', y: '10vh' }, duration: 25 },
    { id: 'g1', type: GradCapIcon, color: 'rgba(255, 255, 255, 0.08)', size: 80, initial: { x: '10vw', y: '80vh' }, animate: { x: '100vw', y: '70vh' }, duration: 22 },
    { id: 'c2', type: 'circle', color: 'rgba(255, 255, 255, 0.04)', size: 200, initial: { x: '110vw', y: '30vh' }, animate: { x: '-10vw', y: '40vh' }, duration: 30 },
    { id: 'a1', type: AtomIcon, color: 'rgba(255, 255, 255, 0.1)', size: 60, initial: { x: '90vw', y: '95vh' }, animate: { x: '10vw', y: '80vh' }, duration: 18 },
    { id: 'b1', type: BookIcon, color: 'rgba(255, 255, 255, 0.08)', size: 70, initial: { x: '20vw', y: '110vh' }, animate: { x: '90vw', y: '-10vh' }, duration: 28 },
    { id: 'bus1', type: BusIcon, color: 'rgba(255, 255, 255, 0.07)', size: 120, initial: { x: '110vw', y: '60vh' }, animate: { x: '-20vw', y: '75vh' }, duration: 20 },
    { id: 'child1', type: ChildrenIcon, color: 'rgba(255, 255, 255, 0.1)', size: 70, initial: { x: '-5vw', y: '5vh' }, animate: { x: '105vw', y: '15vh' }, duration: 26 },
    { id: 'globe1', type: GlobeIcon, color: 'rgba(255, 255, 255, 0.09)', size: 90, initial: { x: '50vw', y: '-10vh' }, animate: { x: '40vw', y: '110vh' }, duration: 24 },
    { id: 'dna1', type: DnaIcon, color: 'rgba(255, 255, 255, 0.1)', size: 60, initial: { x: '-10vw', y: '60vh' }, animate: { x: '110vw', y: '50vh' }, duration: 19 },
    // Particles
    { id: 'p1', type: 'circle', color: 'rgba(255, 255, 255, 0.1)', size: 15, initial: { x: '20vw', y: '-10vh' }, animate: { x: '30vw', y: '110vh' }, duration: 15 },
    { id: 'p2', type: 'circle', color: 'rgba(255, 255, 255, 0.09)', size: 20, initial: { x: '110vw', y: '5vh' }, animate: { x: '-10vw', y: '15vh' }, duration: 18 },
    { id: 'p3', type: 'circle', color: 'rgba(255, 255, 255, 0.06)', size: 10, initial: { x: '80vw', y: '110vh' }, animate: { x: '70vw', y: '-10vh' }, duration: 23 },
    { id: 'p4', type: 'circle', color: 'rgba(255, 255, 255, 0.08)', size: 25, initial: { x: '0vw', y: '90vh' }, animate: { x: '100vw', y: '80vh' }, duration: 29 },
  ];

  const renderElement = (el) => {
    const commonProps = {
      key: el.id,
      className: "absolute",
      style: { width: el.size, height: el.size, willChange: 'transform' },
      initial: el.initial,
      animate: el.animate,
      transition: {
        duration: el.duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: 'loop',
        delay: -Math.random() * el.duration,
      }
    };

    if (typeof el.type === 'string' && el.type === 'circle') {
      return <motion.div {...commonProps} style={{ ...commonProps.style, backgroundColor: el.color, borderRadius: '50%' }} />;
    } else {
      const IconComponent = el.type;
      return (
        <motion.div {...commonProps}>
          <motion.div
            style={{ width: '100%', height: '100%' }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: el.duration * 1.5, ease: 'linear', repeat: Infinity, delay: -Math.random() * el.duration * 1.5 }}
          >
            <IconComponent color={el.color} />
          </motion.div>
        </motion.div>
      );
    }
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden hero-gradient-bg">
      {elements.map(renderElement)}
    </div>
  );
};

// --- (The rest of your components like Counter, SectionHeader, etc. remain unchanged) ---

const Counter = ({ end, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const frameRate = 1000 / 60;
      const totalFrames = Math.round(duration / frameRate);
      let frame = 0;

      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(end * easedProgress));

        if (frame === totalFrames) {
          clearInterval(counter);
          setCount(end);
        }
      }, frameRate);

      return () => clearInterval(counter);
    }
  }, [isInView, end]);

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
const FeatureCard = ({ icon, title, link }) => (
  <motion.div variants={itemVariants} className="h-full">
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
  <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl shadow-lg h-full flex flex-col">
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
      <div className="w-3/5">
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
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
    <div className="bg-gray-50 overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative flex items-center justify-center h-[85vh] overflow-hidden">
        <AbstractHeroBackground />
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

      {/* --- Rest of the page sections --- */}
      <section className="py-16 lg:py-20">
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
       <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader title={<>Enable better outcomes <br /><span className="text-cyan-600">for everyone</span></>} />
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {personas.map((persona) => <PersonaCard key={persona.title} {...persona} />)}
          </motion.div>
        </div>
      </section>
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <SectionHeader title="A Complete Ecosystem for Your Institution" subtitle="Explore our integrated suite of modules designed to cover every aspect of school management." />
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {coreProducts.map((product) => <FeatureCard key={product.title} {...product} />)}
          </motion.div>
        </div>
      </section>
      <section className="py-16 lg:py-20">
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
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader title="Trusted by Leading Educational Institutions" subtitle="Hear what our partners have to say about their experience with Vidyamate." />
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {testimonials.map((testimonial) => <TestimonialCard key={testimonial.name} {...testimonial} />)}
          </motion.div>
        </div>
      </section>
      <section className="py-16 lg:py-20 bg-gray-800 text-white">
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
      <section className="py-16 lg:py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
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