import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import PageTitle from '../components/PageTitle';
import getStartedImg from '../assets/get-started.png';

const GetStartedPage = () => {
  // --- IMPORTANT: Replace with your new Formspree Form ID ---
  const [state, handleSubmit] = useForm("xdklbrqb");
  // --------------------------------------------------------

  // This will show a success message after the form is submitted
  if (state.succeeded) {
      return (
        <>
            <PageTitle 
                title="Thank You!"
                description="Your demo request has been received. Our team will be in touch shortly to schedule a time that works for you."
                breadcrumbs="Get Started"
            />
            <div className="bg-white py-16 text-center">
                <p className="text-lg text-gray-700">We look forward to speaking with you.</p>
            </div>
        </>
      );
  }

  return (
    <>
      <PageTitle 
        title="Let's Start a Conversation"
        description="Take the first step towards transforming your institution. Fill out the form below, and one of our specialists will connect with you to schedule a personalized demo."
        breadcrumbs="Get Started"
      />
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-last" data-aos="fade-up" data-aos-delay="100">
              <img src={getStartedImg} className="w-full" alt="Illustration of a person starting a journey" />
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <h4 className="text-3xl font-bold text-gray-800">Request a Free Demo</h4>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input id="name" type="text" name="name" className="w-full px-4 py-2 bg-gray-100 border-transparent rounded-lg focus:ring-cyan-500 focus:border-cyan-500" placeholder="Your Full Name" required />
                  </div>
                  <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input id="email" type="email" name="email" className="w-full px-4 py-2 bg-gray-100 border-transparent rounded-lg focus:ring-cyan-500 focus:border-cyan-500" placeholder="Your Work Email" required />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-600 text-sm mt-1"/>
                  </div>
                </div>
                <div>
                  <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-1">Institution Name</label>
                  <input id="institution" type="text" name="institution" className="w-full px-4 py-2 bg-gray-100 border-transparent rounded-lg focus:ring-cyan-500 focus:border-cyan-500" placeholder="Name of Your School" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 bg-gray-100 border-transparent rounded-lg focus:ring-cyan-500 focus:border-cyan-500" placeholder="Tell us a little about your needs..."></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-600 text-sm mt-1"/>
                </div>
                <div className="text-center">
                  <button type="submit" disabled={state.submitting} className="bg-cyan-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-cyan-600 transition-colors disabled:bg-gray-400">
                    {state.submitting ? 'Submitting...' : 'Submit Request'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetStartedPage;

