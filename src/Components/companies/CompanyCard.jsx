import React from "react";

const CompanyCard = ({ img }) => {
  return (
    <div className="company-card">
      <img src={img} alt={img} height={25} width={60} />
    </div>
  );
};

export default CompanyCard;
