import React from 'react';
// Corrected import to use .jsx extension
import ProductPageLayout from '../components/ProductPageLayout.jsx';
import learningImg from '../assets/learning-management.png';

const LearningManagementPage = () => {
  const featureList = [
    "Easy creation and distribution of digital course content.",
    "Online assignments, quizzes, and automated grading.",
    "Student progress and performance analytics for educators."
  ];

  return (
    <ProductPageLayout
      title="Learning Management System"
      pageDescription="Create a dynamic digital learning environment that extends the classroom and empowers both teachers and students."
      imageUrl={learningImg}
      imageAlt="Learning Management System"
      featureDescription="Our LMS is a powerful tool for modern education. It enables teachers to create and share course materials, conduct online assessments, and track student progress, fostering a collaborative and engaging learning experience."
      features={featureList}
    />
  );
};

export default LearningManagementPage;
