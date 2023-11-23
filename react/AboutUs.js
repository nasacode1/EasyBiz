// AboutUs.js
import React from 'react';
import './AboutUs.css'; // Create a separate CSS file for styling

function AboutUs() {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <p>Welcome to EasyBiz - Your Business Growth Solution. We are dedicated to helping businesses flourish in the digital world.</p>
      
      <h3>Our Mission</h3>
      <p>At EasyBiz, our mission is to provide innovative and easy-to-use solutions for businesses of all sizes. We aim to empower entrepreneurs and enterprises to reach their full potential in the online marketplace.</p>
      
      <h3>Our Team</h3>
      <p>Meet our dedicated team of experts who are passionate about driving your business success. With years of experience in e-commerce and digital marketing, we're here to support you every step of the way.</p>
      
      <h3>Why Choose EasyBiz?</h3>
      <ul>
        <li>Effortless Customer Engagement</li>
        <li>Streamlined Product Management</li>
        <li>Insightful Blogging Platform</li>
        <li>Secure and Reliable Transactions</li>
        <li>24/7 Customer Support</li>
        <li>Seamless Integration with Your Website</li>
      </ul>
      
      <p>Ready to grow your business with EasyBiz? <a href="#">Get Started</a></p>
    </div>
  );
}

export default AboutUs;
