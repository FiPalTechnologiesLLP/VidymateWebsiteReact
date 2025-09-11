import React from 'react';
import ProductPageLayout from '../components/ProductPageLayout';
import schoolImg from '../assets/school-management.png';

const SchoolManagementPage = () => {
  return (
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
  );
};

export default SchoolManagementPage;