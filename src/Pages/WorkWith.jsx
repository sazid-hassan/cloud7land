"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from "react-icons/fc";
import CompanyCard from "../Components/companies/CompanyCard";

const Card = ({ heading, icon, description, href }) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
          Learn more
        </Button>
      </Stack>
    </Box>
  );
};

export default function WorkWith() {
  const [globalPartners, setGlobalPartners] = useState([]);
  const [workWith, setWorkWith] = useState([]);

  useEffect(() => {
    const imageContext = require.context(
      "../assets/global-partners/",
      false,
      /\.(png|jpg|jpeg|gif|svg)$/
    );
    const partners = imageContext.keys().map((imagePath) => ({
      src: imageContext(imagePath),
    }));

    const imgContext = require.context(
      "../assets/work-with/",
      false,
      /\.(png|jpg|jpeg|gif|svg)$/
    );
    const workers = imgContext.keys().map((imagePath) => ({
      src: imgContext(imagePath),
    }));

    setWorkWith(workers);
    setGlobalPartners(partners);
  }, []);

  return (
    <>
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
            GLOBAL PARTNERS
          </Heading>
        </Stack>

        <Container maxW={"5xl"} mt={12}>
          <Flex flexWrap="wrap" gridGap={6} justify="center">
            {globalPartners.map((d, i) => (
              <CompanyCard img={d.src} />
            ))}
          </Flex>
        </Container>
      </Box>

      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
            We work with
          </Heading>
        </Stack>

        <Container maxW={"5xl"} mt={12}>
          <Flex flexWrap="wrap" gridGap={6} justify="center">
            {workWith.map((d, i) => (
              <CompanyCard img={d.src} />
            ))}
          </Flex>
        </Container>
      </Box>
    </>
  );
}
