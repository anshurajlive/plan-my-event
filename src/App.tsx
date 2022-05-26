import * as React from "react";
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
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import WithSubnavigation from "./layouts/header";
import { LargeWithAppLinksAndSocial } from "./layouts/footer";
import SimpleCard from "./pages/login";
import SignupCard from "./pages/signup";
import ContactFormWithSocialButtons from "./pages/contact";

const Home = lazy(() => import("./pages/home"));

const { PUBLIC_URL } = process.env;

export const App = () => (
  <ChakraProvider theme={theme}>
    <WithSubnavigation />
    <BrowserRouter basename={PUBLIC_URL}>
      <Suspense>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SimpleCard} />
          <Route exact path="/signup" component={SignupCard} />
          <Route
            exact
            path="/contact"
            component={ContactFormWithSocialButtons}
          />
        </Switch>
      </Suspense>
    </BrowserRouter>
    <LargeWithAppLinksAndSocial />
  </ChakraProvider>
);
// <ChakraProvider theme={theme}>

//   <Box textAlign="center" fontSize="xl">
//     <Grid minH="100vh" p={3}>
//       <ColorModeSwitcher justifySelf="flex-end" />
//       <VStack spacing={8}>
//         <Logo h="40vmin" pointerEvents="none" />
//         <Text>
//           Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
//         </Text>
//         <Link
//           color="teal.500"
//           href="https://chakra-ui.com"
//           fontSize="2xl"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn Chakra
//         </Link>
//       </VStack>
//     </Grid>
//   </Box>

// </ChakraProvider>
