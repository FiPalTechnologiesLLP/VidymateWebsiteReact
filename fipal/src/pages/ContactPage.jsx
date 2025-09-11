import React from 'react';
import PageTitle from '../components/PageTitle';

function ContactPage() {
  // The URL from the Google Form you provided
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeBUukTDeYbZurvA3F51oZT7IZ5YUY2B1rxVOxPkPPE4ohtYg/viewform?embedded=true";

  return (
    <>
      <PageTitle 
        title="Get in Touch"
        description="Have a question or need support? Our team is ready to help. Reach out to us through any of the channels below."
        breadcrumbs="Contact"
      />
      
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12" data-aos="fade-up">
            <iframe
              title="Google Maps Location"
              className="w-full h-80 rounded-lg shadow-md"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123838.38127508685!2d77.52554604335937!3d14.685866100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14b5a35924409%3A0x6335359b2c3c9900!2sAnantapur%2C%20Andhra%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1663186214307!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <div className="flex" data-aos="fade-up" data-aos-delay="100">
                <i className="bi bi-envelope text-2xl text-cyan-500 mr-4 mt-1"></i>
                <div>
                  <h3 className="text-xl font-bold">Email Us</h3>
                  <p className="text-gray-600">support@vidyamate.in</p>
                </div>
              </div>
              <div className="flex" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-telephone text-2xl text-cyan-500 mr-4 mt-1"></i>
                <div>
                  <h3 className="text-xl font-bold">Call Us</h3>
                  <p className="text-gray-600">+91 93467 30371</p>
                </div>
              </div>
              <div className="flex" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-geo-alt text-2xl text-cyan-500 mr-4 mt-1"></i>
                <div>
                  <h3 className="text-xl font-bold">Address</h3>
                  <p className="text-gray-600">FiPal Technologies LLP, Anantapur, Andhra Pradesh</p>
                </div>
              </div>
            </div>

            {/* Google Form Iframe replaces the old form */}
            <div className="lg:col-span-2" data-aos="fade-up" data-aos-delay="100">
              <div 
                className="relative w-full h-0 overflow-hidden rounded-lg shadow-2xl"
                style={{ paddingTop: '140%' }} // Adjust this percentage to control the form height
              >
                <iframe
                  src={GOOGLE_FORM_URL}
                  className="absolute top-0 left-0 w-full h-full border-0"
                  title="Contact form"
                  allowFullScreen=""
                  loading="lazy"
                >
                  Loading…
                </iframe>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;

