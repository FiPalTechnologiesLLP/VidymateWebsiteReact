import React from 'react';
// Corrected import to use .jsx extension
import ProductPageLayout from '../components/ProductPageLayout.jsx';
import payrollImg from '../assets/payroll-management.png';

const PayrollManagementPage = () => {
  const featureList = [
    "Automated salary calculation based on attendance and leave.",
    "Statutory compliance for tax and deduction management.",
    "Secure generation and distribution of digital payslips."
  ];

  return (
    <ProductPageLayout
      title="Payroll Management System"
      pageDescription="Ensure accurate, timely, and compliant payroll processing for all your teaching and administrative staff."
      imageUrl={payrollImg}
      imageAlt="Payroll Management System"
      featureDescription="Eliminate the complexities of manual payroll. Our system automates salary calculations, tax deductions, and compliance reporting, generating accurate payslips and reducing the risk of errors."
      features={featureList}
    />
  );
};

export default PayrollManagementPage;
