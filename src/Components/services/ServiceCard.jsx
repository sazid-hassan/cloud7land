import { Box, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import React from "react";

const ServiceCard = ({ data }) => {
  return (
    <SimpleGrid className="service-card" rounded="md" w="20%" h="10" 
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      border: "1px solid #eee",
      boxShadow: "0px 0px 10px #eee",
      padding: "10px",
      margin: "10px",
      cursor: "pointer",
      transition: "all 0.3s ease-in-out",
  
    }}
    >
      <Box>
        <div style={{
          display: "flex",
          justifyContent: "center",
        }}>{data.icon}</div>
        <h3 className="">{data.title}</h3>
      </Box>
    </SimpleGrid>
  );
};

export default ServiceCard;
