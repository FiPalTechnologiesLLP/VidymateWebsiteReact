import React from 'react';
import PageTitle from './PageTitle';

const ProductPageLayout = ({ title, pageDescription, imageUrl, imageAlt, featureDescription, features }) => {
  return (
    <>
      <PageTitle 
        title={title}
        description={pageDescription}
      />
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-up" className="lg:order-last">
              <img src={imageUrl} className="rounded-lg shadow-xl w-full" alt={imageAlt} />
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-3xl font-bold text-gray-800">A Centralized Hub for Modern Education</h3>
              <p className="mt-4 italic text-gray-600">{featureDescription}</p>
              
              {/* This section is now corrected to properly render the list */}
              <ul className="mt-6 space-y-3">
                {/* We ensure 'features' is an array before mapping it. */}
                {Array.isArray(features) && features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <i className="bi bi-check-circle text-cyan-500 mr-3 mt-1"></i>
                    {/* This now correctly renders the 'feature' string. */}
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPageLayout;

