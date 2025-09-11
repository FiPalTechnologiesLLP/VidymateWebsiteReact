import React from 'react';
import ProductPageLayout from '../components/ProductPageLayout';
import feesImg from '../assets/fees-management.png';

const FeesManagementPage = () => {
  return (
    <ProductPageLayout 
      title="Fees Management System"
      pageDescription="Automate fee collection, invoicing, and tracking to reduce administrative workload and improve your institution's cash flow."
      imageUrl={feesImg}
      imageAlt="Fees Management System"
      featureDescription="Our Fees Management System simplifies financial operations by automating invoicing, offering multiple online payment options for parents, and providing real-time tracking of payments and outstanding dues."
      features={[
        "Automated generation of fee receipts and invoices.",
        "Integration with popular online payment gateways.",
        "Real-time dashboards for tracking collections and defaulters."
      ]}
    />
  );
};

export default FeesManagementPage;