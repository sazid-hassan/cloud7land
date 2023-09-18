import { Box, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import React from "react";

const ServiceCard = ({ data }) => {
  return (
    <SimpleGrid className="service-card" rounded="md" w="20%" h="10">
      <Box>
        <>{data.icon}</>
        <h3>{data.title}</h3>
      </Box>
    </SimpleGrid>
  );
};

export default ServiceCard;
