import React from 'react';
import PageTitle from '../components/PageTitle';
import aboutImg from '../assets/about.jpg';

const ContentSection = ({ img, order, title, children }) => (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className={`lg:col-span-5 ${order === 'reversed' ? 'lg:order-last' : ''}`} data-aos="fade-up" data-aos-delay="100">
        <img src={img} className="w-full rounded-lg shadow-lg" alt="Details about our plans" />
      </div>
      <div className="lg:col-span-7" data-aos="fade-up" data-aos-delay="200">
        <h4 className="text-2xl font-bold text-gray-800">{title}</h4>
        <p className="italic text-gray-600 mt-3">
          {children}
        </p>
      </div>
    </div>
);

const PlansPage = () => {
  return (
    <>
      <PageTitle 
        title="Flexible Plans for Every Institution"
        description="We offer scalable and affordable solutions designed to meet the unique needs of your school, no matter its size."
        breadcrumbs="Plans"
      />
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 space-y-16">
          <ContentSection img={aboutImg} order="normal" title="Essential Suite for Growing Schools">
            Our starter package includes all the core modules you need to digitize your operations, from student admissions to fee management. It's the perfect foundation for bringing efficiency and clarity to your administrative tasks.
          </ContentSection>
          <ContentSection img={aboutImg} order="reversed" title="Professional Package for Comprehensive Management">
            This plan expands on the essentials, integrating advanced academic and communication tools like our Learning Management System and parent communication portals. It's designed for institutions looking to create a fully connected digital ecosystem.
          </ContentSection>
          <ContentSection img={aboutImg} order="normal" title="Enterprise Solutions for Large Institutions">
            For large schools or districts, we offer a fully customizable enterprise solution with dedicated support, advanced analytics, and custom integrations. This plan is tailored to your specific operational needs and strategic goals.
          </ContentSection>
        </div>
      </section>
    </>
  );
};

export default PlansPage;