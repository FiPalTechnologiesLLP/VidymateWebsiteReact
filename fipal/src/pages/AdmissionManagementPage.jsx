import React from 'react';
// Corrected import to use .jsx extension
import ProductPageLayout from '../components/ProductPageLayout.jsx';
import admissionImg from '../assets/admission-manaagement.png';

const AdmissionManagementPage = () => {
  const featureList = [
    "Customizable online application forms.",
    "Digital document submission and verification.",
    "Automated communication and status updates for applicants."
  ];

  return (
    <ProductPageLayout
      title="Admission Management System"
      pageDescription="Simplify your entire enrollment process, from initial inquiry to final acceptance, with our intuitive digital platform."
      imageUrl={admissionImg}
      imageAlt="Admission Management System"
      featureDescription="Move beyond cumbersome paperwork. Our system allows you to manage applications, track candidate progress, and communicate with prospective families seamlessly, ensuring a smooth and professional experience for everyone involved."
      features={featureList}
    />
  );
};

export default AdmissionManagementPage;

