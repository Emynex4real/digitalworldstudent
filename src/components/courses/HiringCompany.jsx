import React from "react";
// import "./HiringCompanies.css";

const companies = [
  {logo: "../images/companies/bluesky.jpg" },
  { logo: "../images/companies/fcm.png" },
  { logo: "../images/companies/first bank.png" },
  {logo: "../images/companies/Kosmos.jpg" },
  { logo: "../images/companies/lommm.png" },
  { logo: "../images/companies/pwan group.png" },
  { logo: "../images/companies/nnpc.png" },
  { logo: "../images/companies/slot.png" },
  { logo: "../images/companies/mb.jpg" },
  {logo: "../images/companies/Levene-Energy.png" },
  {logo: "../images/companies/kev-logo.jpg" },
  {logo: "../images/companies/imagesol.png" },
  {logo: "../images/companies/images.png" },
  {logo: "../images/companies/images (2).jpg" },
  {logo: "../images/companies/images.jpeg.jpg" },
  {logo: "../images/companies/gh-goil-logo.webp" },
  {logo: "../images/companies/ecobank.png" },
  {logo: "../images/companies/download (4).jpeg.jpg" },
  {logo: "../images/companies/guinness.webp" },
];

const HiringCompanies = () => {
  return (
    <div className="hiring-container hidden">
      <h2>Top Companies Hire Our Graduates</h2>
      <p>Our alumni work at leading tech companies around the world.</p>

      <div className="logo-grid">
        {companies.map((company, index) => (
          <div key={index} className="logo-card">
            <img src={company.logo} alt={company.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HiringCompanies;
