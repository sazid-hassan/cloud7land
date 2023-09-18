import { Box, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import React from "react";

const ServiceCard = ({ data }) => {
  return (
    <SimpleGrid className="service-card" rounded="md" w='20%' h='10' >
      <Box>
        <h3>{data.title}</h3>
        <p>{data.desc}</p>
      </Box>

    </SimpleGrid>





  )
};

export default ServiceCard;
