import React from "react";
import ServiceCard from "../Components/services/ServiceCard";

const Services = () => {
  const serviceData = [
    {
      title: "OTT",
    },
    {
      title: "Gaming",
    },
    {
      title: "Live Streaming",
    },
    {
      title: "Life Style",
    },
    {
      title: "Education",
    },
    {
      title: "Music & Audio",
    },
  ];

  return (
    <div className="about" m>
      <h3 className="service-name" >Service Sectors</h3>
      <div className="service-card-holder">
        {serviceData.map((d, i) => (
          <ServiceCard key={i} data={d} />
        ))}
      </div>
    </div>
  );
};

export default Services;
