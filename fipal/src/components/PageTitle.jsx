import React from 'react';
import { Link } from 'react-router-dom';

const PageTitle = ({ title, description, breadcrumbs }) => {
  return (
    // Updated container with a darker blue background and more padding
    <div className="bg-cyan-500 py-20 text-white" data-aos="fade">
      <div className="container mx-auto px-4">
        {/* Main title section */}
        <div className="text-center">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto opacity-90">{description}</p>
        </div>

        {/* Breadcrumbs section at the bottom */}
        {breadcrumbs && (
          <nav className="mt-12">
            <ol className="flex justify-center md:justify-start space-x-2 text-sm">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li className="flex items-center">
                <span className="mx-2">/</span>
                <span className="opacity-80">{breadcrumbs}</span>
              </li>
            </ol>
          </nav>
        )}
      </div>
    </div>
  );
};

export default PageTitle;

