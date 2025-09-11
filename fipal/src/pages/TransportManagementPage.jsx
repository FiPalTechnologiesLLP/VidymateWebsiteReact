import React from 'react';
// Corrected import to use .jsx extension
import ProductPageLayout from '../components/ProductPageLayout.jsx';
import transportImg from '../assets/transport-management.png';

const TransportManagementPage = () => {
  const featureList = [
    "Live GPS tracking of all school buses.",
    "Efficient route planning and optimization to save time and fuel.",
    "Real-time notifications for parents on bus location and delays."
  ];

  return (
    <ProductPageLayout
      title="Transport Management System"
      pageDescription="Enhance student safety and operational efficiency with comprehensive tools for managing your school's transportation fleet."
      imageUrl={transportImg}
      imageAlt="Transport Management System"
      featureDescription="Gain complete control over your school's bus fleet. Our system provides real-time vehicle tracking, route optimization, and instant communication alerts for parents, ensuring student safety is always the top priority."
      features={featureList}
    />
  );
};

export default TransportManagementPage;
