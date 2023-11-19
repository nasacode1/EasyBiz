import React from 'react';

function ServiceSection() {
  return (
    <section className="service-section">
      <h3>Our Services</h3>
      <div className="service">
        <i className="service-icon fa fa-shopping-cart"></i>
        <p className="service-text">Easy to use shopping cart and checkout process that ensures a smooth and secure purchasing experience for your customers.</p>
      </div>
      <div className="service">
        <i className="service-icon fa fa-line-chart"></i>
        <p className="service-text">Advanced analytics and reporting tools to help you track sales, understand customer behavior, and make data-driven decisions.</p>
      </div>
      <div className="service">
        <i className="service-icon fa fa-envelope"></i>
        <p className="service-text">Automated email marketing campaigns to engage with customers, promote products, and increase repeat sales.</p>
      </div>
      <div className="service">
        <i className="service-icon fa fa-cogs"></i>
        <p className="service-text">Flexible customization options, allowing you to tailor your online store to match your brand and unique business needs.</p>
      </div>
    </section>
  );
}

export default ServiceSection;