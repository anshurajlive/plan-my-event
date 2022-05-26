import React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Heading,
  Avatar,
  Center,
  Image,
  Flex,
  Stack,
  Button,
  useColorModeValue,
  Switch,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { Logo } from "../Logo";
import { LargeWithAppLinksAndSocial } from "../layouts/footer";
import WithSubnavigation from "../layouts/header";
import CaptionCarousel from "../components/slider";
import PlanMyEvent from "../components/plan-my-event";

//import Main from '../layouts/Main';

const Home = () => (
  <ChakraProvider theme={theme}>
    {/* <CaptionCarousel /> */}
    {/* <WithSubnavigation /> */}
    <PlanMyEvent />
    {/* <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Text>
            Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
          </Text>
          <Link
            color="teal.500"
            href="https://chakra-ui.com"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Chakra 1
          </Link>
        </VStack>
      </Grid>
    </Box> */}
    {/* <LargeWithAppLinksAndSocial /> */}
  </ChakraProvider>
);

export default Home;
