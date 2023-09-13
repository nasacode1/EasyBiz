// Features.js
import React from 'react';

const featuresData = [
  {
    name: "Connect with Customers",
    description: "Reach a global audience and build strong customer relationships.",
    animationClass: "connect-animation", // CSS class for animation
  },
  {
    name: "Manage Products",
    description: "Add, update, and organize your products with ease.",
    animationClass: "manage-animation", // CSS class for animation
  },
  {
    name: "Engage with Blogs",
    description: "Share insights, tips, and updates with your community through blogs.",
    animationClass: "engage-animation", // CSS class for animation
  },
  {
    name: "Login as Seller",
    description: "Access your seller account to manage your online store and products.",
    animationClass: "seller-animation", // CSS class for animation
  },
  {
    name: "Login as Customer",
    description: "Login as a customer to view orders, track shipments, and more.",
    animationClass: "customer-animation", // CSS class for animation
  },
];

function Features() {
  return (
    <section className="features">
      {featuresData.map((feature, index) => (
        <div key={index} className={`feature ${feature.animationClass}`}>
          <h3>{feature.name}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;

