"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
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
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          GLOBAL PARTNERS
        </Heading>
      </Stack>
      {globalPartners.map((d, i) => (
        <img src={d.src} key={i} height={40} width={100} />
      ))}
      {workWith.map((d, i) => (
        <img src={d.src} key={i} height={40} width={100} />
      ))}

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"Heading"}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
            href={"#"}
          />
          <Card
            heading={"Heading"}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
            href={"#"}
          />
          <Card
            heading={"Heading"}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
            href={"#"}
          />
          <Card
            heading={"Heading"}
            icon={<Icon as={FcManager} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
            href={"#"}
          />
          <Card
            heading={"Heading"}
            icon={<Icon as={FcAbout} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
            href={"#"}
          />
        </Flex>
      </Container>
    </Box>
  );
}
