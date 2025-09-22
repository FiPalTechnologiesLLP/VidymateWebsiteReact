import React, { useEffect } from 'react';
import { createHashRouter, RouterProvider } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Layout and Core Pages
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PlansPage from './pages/PlansPage';
import GetStartedPage from './pages/GetStartedPage';

// Product Pages
import AdmissionManagementPage from './pages/AdmissionManagementPage';
import FeesManagementPage from './pages/FeesManagementPage';
import LearningManagementPage from './pages/LearningManagementPage';
import PayrollManagementPage from './pages/PayrollManagementPage';
import SchoolManagementPage from './pages/SchoolManagementPage';
import TransportManagementPage from './pages/TransportManagementPage';

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "plans", element: <PlansPage /> },
      { path: "get-started", element: <GetStartedPage /> },

      // Product Routes
      { path: "admission-management", element: <AdmissionManagementPage /> },
      { path: "fee-management", element: <FeesManagementPage /> },
      { path: "learning-management", element: <LearningManagementPage /> },
      { path: "payroll-management", element: <PayrollManagementPage /> },
      { path: "school-management", element: <SchoolManagementPage /> },
      { path: "transport-management", element: <TransportManagementPage /> },
    ],
  },
]);

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return <RouterProvider router={router} />;
}

export default App;