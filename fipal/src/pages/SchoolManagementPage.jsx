import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProductPageLayout from '../components/ProductPageLayout';
import schoolImg from '../assets/school-management.png';

// A reusable component for the new "Key Features" section
const FeatureHighlight = ({ icon, title, children }) => (
  <motion.div 
    className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 h-full"
    whileHover={{ y: -5, scale: 1.03 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-cyan-50 mb-4">
      <i className={`${icon} text-2xl text-cyan-500`}></i>
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </motion.div>
);

const SchoolManagementPage = () => {
  // Animation variants for staggering items
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

  return (
    <>
      {/* --- This is the original product page layout --- */}
      <ProductPageLayout 
        title="School Management System"
        pageDescription="The all-in-one platform to manage your institution's academic and administrative operations with unparalleled efficiency."
        imageUrl={schoolImg}
        imageAlt="School Management System"
        featureDescription="Our School Management System provides a holistic view of your institution, connecting administrators, teachers, students, and parents on a single, integrated platform."
        features={[
          "Centralized student information and academic records.",
          "Timetable creation and management for all classes.",
          "Attendance tracking with automated alerts for parents."
        ]}
      />

      {/* --- NEW: Key Features Section --- */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800" data-aos="fade-up">Key Features in Detail</h2>
            <p className="mt-4 text-lg text-gray-600" data-aos="fade-up" data-aos-delay="100">Everything you need to run your institution smoothly.</p>
          </div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants}>
              <FeatureHighlight icon="fa-solid fa-users" title="Student Information">
                Manage profiles, academic history, and contact details in one secure, centralized database.
              </FeatureHighlight>
            </motion.div>
            <motion.div variants={itemVariants}>
              <FeatureHighlight icon="fa-solid fa-calendar-alt" title="Academic Planning">
                Easily create and manage timetables, examinations, and class schedules for all grades.
              </FeatureHighlight>
            </motion.div>
            <motion.div variants={itemVariants}>
              <FeatureHighlight icon="fa-solid fa-user-check" title="Attendance Tracking">
                Monitor student attendance with automated alerts sent directly to parents for absenteeism.
              </FeatureHighlight>
            </motion.div>
            <motion.div variants={itemVariants}>
              <FeatureHighlight icon="fa-solid fa-chart-line" title="Gradebooks & Reports">
                Empower teachers with digital gradebooks and generate custom report cards automatically.
              </FeatureHighlight>
            </motion.div>
             <motion.div variants={itemVariants}>
              <FeatureHighlight icon="fa-solid fa-comments" title="Parent Communication">
                Bridge the communication gap with built-in messaging, circulars, and a dedicated parent portal.
              </FeatureHighlight>
            </motion.div>
             <motion.div variants={itemVariants}>
              <FeatureHighlight icon="fa-solid fa-bus" title="Transport & Hostel">
                Integrate and manage your school's transport routes and hostel accommodations seamlessly.
              </FeatureHighlight>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- NEW: Call to Action Section --- */}
      <section className="bg-cyan-500">
        <div className="container mx-auto px-4 py-16 text-center">
            <motion.h2 
              className="text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Transform Your School?
            </motion.h2>
            <motion.p 
              className="text-lg text-white max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              See our School Management System in action. Schedule a free, no-obligation demo with one of our specialists today.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/get-started" className="bg-white text-cyan-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors shadow-lg">
                Request a Free Demo
              </Link>
            </motion.div>
        </div>
      </section>
    </>
  );
};

export default SchoolManagementPage;

