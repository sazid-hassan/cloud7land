import React from "react";
import ServiceCard from "../Components/services/ServiceCard";
import { AiOutlinePlaySquare } from "react-icons/ai";
import {
  IoGameControllerOutline,
  IoShirtOutline,
  IoMusicalNotesOutline,
} from "react-icons/io5";
import { CiStreamOn } from "react-icons/ci";
import { FaGraduationCap } from "react-icons/fa6";

const Services = () => {
  const serviceData = [
    {
      title: "OTT",
      icon: <AiOutlinePlaySquare className="card-ic" />,
    },
    {
      title: "Gaming",
      icon: <IoGameControllerOutline className="card-ic" />,
    },
    {
      title: "Live Streaming",
      icon: <CiStreamOn className="card-ic" />,
    },
    {
      title: "Life Style",
      icon: <IoShirtOutline className="card-ic" />,
    },
    {
      title: "Education",
      icon: <FaGraduationCap className="card-ic" />,
    },
    {
      title: "Music & Audio",
      icon: <IoMusicalNotesOutline className="card-ic" />,
    },
  ];

  return (
    <div className="about" m>
      <h3 className="service-name">Service Sectors</h3>
      <div className="service-card-holder">
        {serviceData.map((d, i) => (
          <ServiceCard key={i} data={d} />
        ))}
      </div>
    </div>
  );
};

export default Services;
